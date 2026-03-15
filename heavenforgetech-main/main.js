// ===== HeavenForge Tech — Shared Scripts =====

// === Email obfuscation (only on index page) ===
(function () {
  const h = document.getElementById('contact-mail');
  if (h) {
    const c = [99,111,110,116,97,99,116,64,104,101,97,118,101,110,102,111,114,103,101,116,101,99,104,46,99,111,109];
    const e = String.fromCharCode(...c);
    const a = document.createElement('a');
    a.href = 'https://mail.google.com/mail/?view=cm&to=' + encodeURIComponent(e) + '&su=' + encodeURIComponent('Yêu cầu tư vấn — HeavenForge Tech');
    a.textContent = '✉ Email — ' + e;
    a.target = '_blank';
    a.rel = 'noopener noreferrer nofollow';
    h.appendChild(a);
  }
})();

// === Header scroll effect ===
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// === Mobile nav toggle ===
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function closeNav() {
  navLinks.classList.remove('open');
  navToggle.classList.remove('active');
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

// === Smooth scroll (only for same-page anchors) ===
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// === Scroll animations (replay on re-scroll) ===
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      } else {
        e.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.glass-card, .tech-item, .section-title, .section-label, .section-sub, .hero-content > *')
    .forEach(el => obs.observe(el));
} else {
  // If user prefers reduced motion, show everything immediately
  document.querySelectorAll('.glass-card, .tech-item, .section-title, .section-label, .section-sub, .hero-content > *')
    .forEach(el => el.classList.add('visible'));
}

// === Dynamic copyright year ===
document.querySelectorAll('.footer-bottom p').forEach(p => {
  p.textContent = p.textContent.replace(/©\d{4}/, '©' + new Date().getFullYear());
});

// === Image download protection ===
(function () {
  // Block right-click on images
  document.addEventListener('contextmenu', e => {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });

  // Block drag & drop
  document.addEventListener('dragstart', e => {
    if (e.target.tagName === 'IMG') e.preventDefault();
  });

  // Block long-press save on mobile (touch devices)
  document.addEventListener('touchstart', e => {
    if (e.target.tagName === 'IMG') {
      e.target.style.pointerEvents = 'none';
      setTimeout(() => { e.target.style.pointerEvents = ''; }, 600);
    }
  }, { passive: true });
})();
