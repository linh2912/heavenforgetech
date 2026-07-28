class RisingLines {
    constructor(container, options = {}) {
        this.container = typeof container === 'string' ? document.querySelector(container) : container;
        if (!this.container) throw new Error("Container not found");

        const defaults = {
            particles: 500,
            color: "#DF44F8",
            riseSpeed: 25, // 0-60 -> /100 -> 0-0.6
            opacity: 100, // 0-100 -> /100 -> 0-1
            scale: 7, // 1-20 -> /2 -> 0.5-10
            showHorizon: true,
            horizonColor: "#C918F8",
            horizonOpacity: 85 // 0-100 -> /100 -> 0-1
        };

        this.options = { ...defaults, ...options };
        
        // Parse options like React component does
        this.riseSpeed = this.options.riseSpeed / 100;
        this.opacity = this.options.opacity / 100;
        this.horizonOpacity = this.options.horizonOpacity / 100;
        this.scale = this.options.scale / 2;

        this.cParticle = this.parseColor(this.options.color);
        this.cHorizon = this.parseColor(this.options.horizonColor);
        
        this.defaultScale = 3.5;
        this.worldScale = Math.max(0.1, this.scale) / this.defaultScale;

        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.inset = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.display = 'block';
        this.canvas.style.zIndex = '0';
        this.canvas.style.pointerEvents = 'none'; // Background effect
        
        const computedPos = window.getComputedStyle(this.container).position;
        if (computedPos === 'static') {
            this.container.style.position = 'relative';
        }
        this.container.style.overflow = 'hidden';
        // this.container.style.background = '#000';
        this.container.insertBefore(this.canvas, this.container.firstChild);
        
        this.ctx = this.canvas.getContext('2d');
        
        this.size = { w: 0, h: 0, dpr: 1 };
        this.rafId = null;
        
        this.rng = this.makeRng(0xc0ffee);

        // Particle buffers
        this.particleCount = 0;
        this.pX = new Float32Array(0);
        this.pY = new Float32Array(0);
        this.pVY = new Float32Array(0);
        this.pHeight = new Float32Array(0);
        this.pLife = new Float32Array(0);
        this.pLifeMax = new Float32Array(0);

        this.blobCount = 0;
        this.bX = new Float32Array(0);
        this.bY = new Float32Array(0);
        this.bVY = new Float32Array(0);
        this.bR = new Float32Array(0);
        this.bLife = new Float32Array(0);
        this.bLifeMax = new Float32Array(0);
        
        this.resize = this.resize.bind(this);
        this.ro = new ResizeObserver((entries) => this.resize(entries[0]));
        this.ro.observe(this.container);

        this.lastT = performance.now();
        this.loop = this.loop.bind(this);
        
        this.resize();
        this.rafId = requestAnimationFrame(this.loop);
    }

    parseColor(input) {
        if (!input) return [255, 255, 255];
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
        return [255, 255, 255];
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

    sampleCenterX(w) {
        const r = (this.rng() + this.rng() + this.rng()) / 3;
        return r * w;
    }

    sampleSparkHeight() {
        let tall;
        if (this.rng() < 0.12) {
            tall = 70 + this.rng() * 30;
        } else {
            tall = 20 + Math.pow(this.rng(), 0.7) * 35;
        }
        return Math.max(1, Math.floor(tall * this.worldScale));
    }

    getHorizonY(h) {
        return h - 1;
    }

    initParticles() {
        const { w, h } = this.size;
        const area = w * h;
        const refArea = 800 * 400;
        const target = Math.max(0, Math.floor((this.options.particles * area) / refArea));
        
        this.particleCount = Math.min(target, 4000);
        this.pX = new Float32Array(this.particleCount);
        this.pY = new Float32Array(this.particleCount);
        this.pVY = new Float32Array(this.particleCount);
        this.pHeight = new Float32Array(this.particleCount);
        this.pLife = new Float32Array(this.particleCount);
        this.pLifeMax = new Float32Array(this.particleCount);

        const horizonY = this.getHorizonY(h);
        for (let i = 0; i < this.particleCount; i++) {
            this.pX[i] = this.sampleCenterX(w);
            this.pY[i] = horizonY - this.rng() * horizonY * 0.95;
            this.pVY[i] = 10 + this.rng() * 40;
            this.pHeight[i] = this.sampleSparkHeight();
            this.pLifeMax[i] = 2 + this.rng() * 4;
            this.pLife[i] = this.rng() * this.pLifeMax[i];
        }

        const blobTarget = Math.max(0, Math.floor(target * 0.3));
        this.blobCount = Math.min(blobTarget, 1200);
        this.bX = new Float32Array(this.blobCount);
        this.bY = new Float32Array(this.blobCount);
        this.bVY = new Float32Array(this.blobCount);
        this.bR = new Float32Array(this.blobCount);
        this.bLife = new Float32Array(this.blobCount);
        this.bLifeMax = new Float32Array(this.blobCount);

        for (let i = 0; i < this.blobCount; i++) {
            this.bX[i] = this.sampleCenterX(w);
            this.bY[i] = horizonY - this.rng() * horizonY * 0.95;
            this.bVY[i] = 8 + this.rng() * 28;
            this.bR[i] = (1.5 + Math.pow(this.rng(), 1.8) * 3.5) * this.worldScale;
            this.bLifeMax[i] = 3 + this.rng() * 5;
            this.bLife[i] = this.rng() * this.bLifeMax[i];
        }
    }

    resize(entry) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const cr = entry?.contentRect;
        const rectW = cr?.width || this.container.clientWidth || this.container.getBoundingClientRect().width;
        const rectH = cr?.height || this.container.clientHeight || this.container.getBoundingClientRect().height;
        const w = Math.max(1, Math.floor(rectW) || 800);
        const h = Math.max(1, Math.floor(rectH) || 400);
        
        this.size = { w, h, dpr };
        this.canvas.width = Math.floor(w * dpr);
        this.canvas.height = Math.floor(h * dpr);
        this.canvas.style.width = `${w}px`;
        this.canvas.style.height = `${h}px`;
        this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        this.initParticles();
    }

    drawFrame(deltaSec) {
        const { w, h } = this.size;
        const dt = Math.max(0.001, Math.min(0.05, deltaSec));
        const horizonY = this.getHorizonY(h);

        // Opaque background - Instead of full opacity black, let's make it transparent or blend with the site
        // If the user wants it as a background, maybe we just clear canvas to be transparent
        // this.ctx.globalCompositeOperation = "source-over";
        // this.ctx.fillStyle = "rgb(0,0,0)";
        // this.ctx.fillRect(0, 0, w, h);
        this.ctx.clearRect(0, 0, w, h);

        this.ctx.globalCompositeOperation = "lighter";

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

        for (let i = 0; i < this.blobCount; i++) {
            const effVy = this.bVY[i] * (1.0 + riseSpeedMul);
            this.bY[i] -= effVy * dt;
            if (this.bY[i] < -this.bR[i] * 2) {
                this.bX[i] = this.sampleCenterX(w);
                this.bY[i] = horizonY - this.rng() * 10;
                this.bVY[i] = 8 + this.rng() * 28;
                this.bR[i] = (1.5 + Math.pow(this.rng(), 1.8) * 3.5) * this.worldScale;
            }
            const t = Math.max(0, Math.min(1, (horizonY - this.bY[i]) / denom));
            const fade = t < 0.2 ? t / 0.2 : Math.max(0, 1 - (t - 0.2) / 0.8);
            const a = fade * this.opacity;
            if (a < 0.01) continue;

            const cx = this.bX[i];
            const cy = this.bY[i];
            const r = this.bR[i];
            
            const bGrad = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
            const aClamped = Math.min(1, a);
            bGrad.addColorStop(0, `rgba(${cPart[0]},${cPart[1]},${cPart[2]},${aClamped})`);
            bGrad.addColorStop(0.4, `rgba(${cPart[0]},${cPart[1]},${cPart[2]},${aClamped * 0.45})`);
            bGrad.addColorStop(1, `rgba(${cPart[0]},${cPart[1]},${cPart[2]},0)`);
            this.ctx.fillStyle = bGrad;
            this.ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
            
            if (r > 2.5) {
                this.ctx.fillStyle = `rgba(255,255,255,${aClamped})`;
                this.ctx.fillRect(Math.floor(cx), Math.floor(cy), 1, 1);
            }
        }

        for (let i = 0; i < this.particleCount; i++) {
            const effVy = this.pVY[i] * (1.0 + riseSpeedMul);
            this.pY[i] -= effVy * dt;
            if (this.pY[i] < -this.pHeight[i]) {
                this.pX[i] = this.sampleCenterX(w);
                this.pY[i] = horizonY - this.rng() * 10;
                this.pVY[i] = 10 + this.rng() * 40;
                this.pHeight[i] = this.sampleSparkHeight();
            }
            const t = Math.max(0, Math.min(1, (horizonY - this.pY[i]) / denom));
            const fade = t < 0.2 ? t / 0.2 : Math.max(0, 1 - (t - 0.2) / 0.8);
            const a = fade * this.opacity;
            if (a < 0.01) continue;

            const px = Math.floor(this.pX[i]);
            const py = Math.floor(this.pY[i]);
            const lineHeight = this.pHeight[i];
            
            const aClamped = Math.min(1, a);
            const sGrad = this.ctx.createLinearGradient(0, py, 0, py + lineHeight);
            sGrad.addColorStop(0, `rgba(${cPart[0]},${cPart[1]},${cPart[2]},0)`);
            sGrad.addColorStop(0.7, `rgba(${cPart[0]},${cPart[1]},${cPart[2]},${aClamped})`);
            sGrad.addColorStop(1, `rgba(${cPart[0]},${cPart[1]},${cPart[2]},${aClamped})`);
            this.ctx.fillStyle = sGrad;
            this.ctx.fillRect(px, py, 1, lineHeight);
        }
    }

    loop(t) {
        const deltaSec = (t - this.lastT) / 1000;
        this.lastT = t;
        this.drawFrame(deltaSec);
        this.rafId = requestAnimationFrame(this.loop);
    }

    destroy() {
        if (this.rafId) cancelAnimationFrame(this.rafId);
        this.ro.disconnect();
        if (this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}
