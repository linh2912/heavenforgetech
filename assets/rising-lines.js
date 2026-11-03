class RisingLines {
    constructor(container, options) {
        this.container = typeof container === 'string' ? document.querySelector(container) : container;
        if (!this.container) {
            throw new Error("Container not found");
        }

        const isMobile = this.detectMobile();

        const defaults = {
            particles: isMobile ? 75 : 200,
            color: "#383E6E",
            riseSpeed: 25, // 0-60 -> /100 -> 0-0.6
            opacity: 100, // 0-100 -> /100 -> 0-1
            scale: 7, // 1-20 -> /2 -> 0.5-10
            showHorizon: false,
            horizonColor: "#2C2F53",
            horizonOpacity: 85,
            fullWidth: true
        };

        this.options = Object.assign({}, defaults, options || {});
        
        this.riseSpeed = this.options.riseSpeed / 100;
        this.opacity = this.options.opacity / 100;
        this.horizonOpacity = this.options.horizonOpacity / 100;
        this.scale = this.options.scale / 2;

        this.cParticle = this.parseColor(this.options.color);
        this.cHorizon = this.parseColor(this.options.horizonColor);
        
        this.defaultScale = 3.5;
        this.worldScale = Math.max(0.1, this.scale) / this.defaultScale;

        // Force container to be fixed full-screen regardless of CSS cache
        this.container.style.position = 'fixed';
        this.container.style.top = '0';
        this.container.style.left = '0';
        this.container.style.right = '0';
        this.container.style.bottom = '0';
        this.container.style.width = '100%';
        this.container.style.height = '100%';
        this.container.style.zIndex = '-1';
        this.container.style.overflow = 'hidden';
        this.container.style.pointerEvents = 'none';
        this.container.style.background = '#02030a';

        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.display = 'block';
        this.canvas.style.pointerEvents = 'none';
        
        this.container.insertBefore(this.canvas, this.container.firstChild);
        this.ctx = this.canvas.getContext('2d', { alpha: true });
        
        this.size = { w: 0, h: 0, dpr: 1 };
        this.rafId = null;
        this.isPaused = false;
        
        this.rng = this.makeRng(0xc0ffee);

        // Particle buffers
        this.particleCount = 0;
        this.pX = new Float32Array(0);
        this.pY = new Float32Array(0);
        this.pVY = new Float32Array(0);
        this.pHeight = new Float32Array(0);

        this.blobCount = 0;
        this.bX = new Float32Array(0);
        this.bY = new Float32Array(0);
        this.bVY = new Float32Array(0);
        this.bR = new Float32Array(0);
        
        this.resize = this.resize.bind(this);
        this.onResizeDebounced = this.debounce(this.resize, 100);

        this.ro = new ResizeObserver(() => {
            this.onResizeDebounced();
        });
        this.ro.observe(this.container);

        window.addEventListener('resize', this.onResizeDebounced, { passive: true });
        window.addEventListener('orientationchange', () => {
            setTimeout(this.resize, 150);
        }, { passive: true });

        // Pause animation when tab is inactive to save battery and GPU
        this.onVisibilityChange = () => {
            if (document.hidden) {
                this.isPaused = true;
                if (this.rafId) {
                    cancelAnimationFrame(this.rafId);
                    this.rafId = null;
                }
            } else {
                this.isPaused = false;
                this.lastT = performance.now();
                if (!this.rafId) {
                    this.rafId = requestAnimationFrame(this.loop);
                }
            }
        };
        document.addEventListener('visibilitychange', this.onVisibilityChange);

        this.lastT = performance.now();
        this.loop = this.loop.bind(this);
        
        this.resize(true);
        this.rafId = requestAnimationFrame(this.loop);
    }

    detectMobile() {
        if (typeof window === 'undefined') {
            return false;
        }
        return Boolean(
            window.innerWidth <= 768 || 
            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent || '')
        );
    }

    debounce(fn, delay) {
        let timer = null;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(null, args);
            }, delay);
        };
    }

    parseColor(input) {
        if (!input) {
            return [56, 62, 110];
        }
        const s = input.trim();
        if (s.startsWith("#")) {
            let hex = s.slice(1);
            if (hex.length === 3) {
                hex = hex.split("").map(c => c + c).join("");
            }
            const num = parseInt(hex, 16);
            return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
        }
        const m = s.match(/rgba?\(([^)]+)\)/i);
        if (m) {
            const parts = m[1].split(",").map(p => parseFloat(p.trim()));
            return [parts[0] || 0, parts[1] || 0, parts[2] || 0];
        }
        return [56, 62, 110];
    }

    makeRng(seed) {
        let s = seed >>> 0;
        return () => {
            s = (s + 0x6d2b79f5) >>> 0;
            let t = s;
            t = Math.imul(t ^ (t >>> 15), t | 1);
            t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }

    sampleX(w) {
        if (this.options.fullWidth) {
            return this.rng() * w;
        }
        const r = (this.rng() + this.rng() + this.rng()) / 3;
        return r * w;
    }

    sampleSparkHeight() {
        let tall;
        if (this.rng() < 0.15) {
            tall = 65 + this.rng() * 35;
        } else {
            tall = 22 + Math.pow(this.rng(), 0.7) * 35;
        }
        return Math.max(1, Math.floor(tall * this.worldScale));
    }

    getHorizonY(h) {
        return h - 1;
    }

    initParticles() {
        const w = this.size.w;
        const h = this.size.h;
        const isMobile = this.detectMobile();

        let target;
        if (isMobile) {
            target = Math.min(80, Math.max(35, Math.floor(this.options.particles * 0.2)));
        } else {
            const area = w * h;
            const refArea = 1920 * 1080;
            const density = Math.min(1.2, Math.max(0.5, area / refArea));
            target = Math.min(220, Math.floor(this.options.particles * density));
        }

        this.particleCount = Math.max(20, target);
        this.pX = new Float32Array(this.particleCount);
        this.pY = new Float32Array(this.particleCount);
        this.pVY = new Float32Array(this.particleCount);
        this.pHeight = new Float32Array(this.particleCount);

        const horizonY = this.getHorizonY(h);
        for (let i = 0; i < this.particleCount; i++) {
            this.pX[i] = this.sampleX(w);
            this.pY[i] = horizonY - this.rng() * horizonY;
            this.pVY[i] = 10 + this.rng() * 35;
            this.pHeight[i] = this.sampleSparkHeight();
        }

        const blobTarget = Math.max(8, Math.floor(this.particleCount * 0.25));
        this.blobCount = Math.min(blobTarget, isMobile ? 22 : 60);
        this.bX = new Float32Array(this.blobCount);
        this.bY = new Float32Array(this.blobCount);
        this.bVY = new Float32Array(this.blobCount);
        this.bR = new Float32Array(this.blobCount);

        for (let i = 0; i < this.blobCount; i++) {
            this.bX[i] = this.sampleX(w);
            this.bY[i] = horizonY - this.rng() * horizonY;
            this.bVY[i] = 8 + this.rng() * 24;
            this.bR[i] = (1.8 + Math.pow(this.rng(), 1.8) * 3.2) * this.worldScale;
        }
    }

    resize(force) {
        force = force === true;
        const isMobile = this.detectMobile();
        const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);

        const rectW = this.container.clientWidth || window.innerWidth || document.documentElement.clientWidth || 800;
        const rectH = this.container.clientHeight || window.innerHeight || document.documentElement.clientHeight || 600;
        const w = Math.max(1, Math.floor(rectW));
        const h = Math.max(1, Math.floor(rectH));

        if (!force && this.size.w === w && Math.abs(this.size.h - h) < 60) {
            return;
        }

        this.size = { w: w, h: h, dpr: dpr };
        this.canvas.width = Math.floor(w * dpr);
        this.canvas.height = Math.floor(h * dpr);
        
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';

        this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        this.initParticles();
    }

    drawFrame(deltaSec) {
        const w = this.size.w;
        const h = this.size.h;
        const dt = Math.max(0.001, Math.min(0.05, deltaSec));
        const horizonY = this.getHorizonY(h);

        this.ctx.clearRect(0, 0, w, h);
        this.ctx.globalCompositeOperation = "lighter";

        // Optional horizon glow
        const horizonAlpha = Math.max(0, Math.min(1, this.horizonOpacity));
        if (this.options.showHorizon && horizonAlpha > 0.001) {
            const rx = w * 0.5;
            const ry = 40 * this.worldScale;
            this.ctx.save();
            this.ctx.translate(w / 2, horizonY);
            this.ctx.scale(rx / ry, 1);
            const hGrad = this.ctx.createRadialGradient(0, 0, 0, 0, 0, ry);
            const cHor = this.cHorizon;
            hGrad.addColorStop(0, `rgba(${cHor[0]},${cHor[1]},${cHor[2]},${horizonAlpha})`);
            hGrad.addColorStop(0.35, `rgba(${cHor[0]},${cHor[1]},${cHor[2]},${horizonAlpha * 0.65})`);
            hGrad.addColorStop(0.7, `rgba(${cHor[0]},${cHor[1]},${cHor[2]},${horizonAlpha * 0.2})`);
            hGrad.addColorStop(1, `rgba(${cHor[0]},${cHor[1]},${cHor[2]},0)`);
            this.ctx.fillStyle = hGrad;
            this.ctx.fillRect(-ry - 2, -ry - 2, (ry + 2) * 2, (ry + 2) * 2);
            this.ctx.restore();
        }

        const riseSpeedMul = Math.max(0, this.riseSpeed) * 10;
        const denom = Math.max(1, horizonY);
        const cPart = this.cParticle;

        // Draw glowing blobs with sharp white core sparkles
        for (let i = 0; i < this.blobCount; i++) {
            const effVy = this.bVY[i] * (1.0 + riseSpeedMul);
            this.bY[i] -= effVy * dt;
            if (this.bY[i] < -this.bR[i] * 2) {
                this.bX[i] = this.sampleX(w);
                this.bY[i] = horizonY + this.rng() * 10;
                this.bVY[i] = 8 + this.rng() * 24;
                this.bR[i] = (1.8 + Math.pow(this.rng(), 1.8) * 3.2) * this.worldScale;
            }

            const t = Math.max(0, Math.min(1, (horizonY - this.bY[i]) / denom));
            let fade = 1.0;
            if (t < 0.1) {
                fade = t / 0.1;
            } else if (t > 0.88) {
                fade = Math.max(0, (1 - t) / 0.12);
            }

            const a = fade * this.opacity;
            if (a < 0.01) {
                continue;
            }

            const cx = this.bX[i];
            const cy = this.bY[i];
            const r = this.bR[i];
            const aClamped = Math.min(1, a);

            // Glowing radial aura
            const bGrad = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.5);
            bGrad.addColorStop(0, `rgba(${cPart[0]},${cPart[1]},${cPart[2]},${aClamped})`);
            bGrad.addColorStop(0.5, `rgba(${cPart[0]},${cPart[1]},${cPart[2]},${aClamped * 0.45})`);
            bGrad.addColorStop(1, `rgba(${cPart[0]},${cPart[1]},${cPart[2]},0)`);
            this.ctx.fillStyle = bGrad;
            this.ctx.fillRect(cx - r * 1.5, cy - r * 1.5, r * 3, r * 3);

            // Twinkling white spark center point (makes it crisp and clearly visible)
            if (r > 1.8) {
                this.ctx.fillStyle = `rgba(255,255,255,${aClamped * 0.9})`;
                this.ctx.fillRect(Math.floor(cx), Math.floor(cy), 1.5, 1.5);
            }
        }

        // Draw rising line sparks with bright glowing heads
        for (let i = 0; i < this.particleCount; i++) {
            const effVy = this.pVY[i] * (1.0 + riseSpeedMul);
            this.pY[i] -= effVy * dt;
            if (this.pY[i] < -this.pHeight[i]) {
                this.pX[i] = this.sampleX(w);
                this.pY[i] = horizonY + this.rng() * 10;
                this.pVY[i] = 10 + this.rng() * 35;
                this.pHeight[i] = this.sampleSparkHeight();
            }

            const t = Math.max(0, Math.min(1, (horizonY - this.pY[i]) / denom));
            let fade = 1.0;
            if (t < 0.1) {
                fade = t / 0.1;
            } else if (t > 0.88) {
                fade = Math.max(0, (1 - t) / 0.12);
            }

            const a = fade * this.opacity;
            if (a < 0.01) {
                continue;
            }

            const px = Math.floor(this.pX[i]);
            const py = Math.floor(this.pY[i]);
            const lineHeight = this.pHeight[i];
            const aClamped = Math.min(1, a);

            // Crisp vertical line gradient with glowing head
            const sGrad = this.ctx.createLinearGradient(0, py, 0, py + lineHeight);
            sGrad.addColorStop(0, `rgba(${cPart[0]},${cPart[1]},${cPart[2]},0)`);
            sGrad.addColorStop(0.7, `rgba(${cPart[0]},${cPart[1]},${cPart[2]},${aClamped * 0.85})`);
            sGrad.addColorStop(1, `rgba(${Math.min(255, cPart[0] + 50)},${Math.min(255, cPart[1] + 50)},${Math.min(255, cPart[2] + 90)},${aClamped})`);
            this.ctx.fillStyle = sGrad;
            this.ctx.fillRect(px, py, 1.5, lineHeight);

            // Bright sparkling head of the line
            if (lineHeight > 25) {
                this.ctx.fillStyle = `rgba(230,240,255,${aClamped * 0.8})`;
                this.ctx.fillRect(px, py + lineHeight - 1, 1.5, 1.5);
            }
        }
    }

    loop(t) {
        if (this.isPaused) {
            return;
        }
        const deltaSec = (t - this.lastT) / 1000;
        this.lastT = t;
        this.drawFrame(deltaSec);
        this.rafId = requestAnimationFrame(this.loop);
    }

    destroy() {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
        if (this.ro) {
            this.ro.disconnect();
        }
        window.removeEventListener('resize', this.onResizeDebounced);
        document.removeEventListener('visibilitychange', this.onVisibilityChange);
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}
