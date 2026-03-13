// ============================================
// SHARED JS — ALL PAGES
// ============================================

// ── THEME ──
const THEME_KEY = 'bba-theme';
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  document.documentElement.dataset.theme = t;
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = t === 'dark' ? '☀️' : '🌙';
  localStorage.setItem(THEME_KEY, t);
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(cur === 'dark' ? 'light' : 'dark');
}
(function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'dark';
  applyTheme(saved);
})();

// ── CURSOR ──
window.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!cursor || !ring) return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });
  (function animRing() {
    rx += (mx - rx) * .18; ry += (my - ry) * .18;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();
  document.querySelectorAll('a,button,.svc-card,.pkg,.calc-tab,.marquee-item,.testi-card,.proc-step,.blog-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovered'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovered'));
  });

  // ── NAV SCROLL ──
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => nav && nav.classList.toggle('scrolled', window.scrollY > 60), {passive:true});

  // ── MOBILE MENU ──
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobMenu');
  const cls = document.getElementById('mobClose');
  if (ham) ham.addEventListener('click', () => mob.classList.add('open'));
  if (cls) cls.addEventListener('click', closeMob);

  // ── ACTIVE NAV ──
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // ── REVEAL ──
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)} });
  }, {threshold:.1, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach((el,i) => {
    el.style.transitionDelay = (i%6)*80+'ms';
    ro.observe(el);
  });

  // ── NEWSLETTER ──
  document.querySelectorAll('.newsletter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const inp = btn.previousElementSibling;
      if (inp && inp.value && /\S+@\S+\.\S+/.test(inp.value)) {
        showToast('You\'re subscribed! Watch your inbox 📧');
        inp.value = '';
      } else {
        showToast('Please enter a valid email address');
      }
    });
  });
});

function closeMob() { document.getElementById('mobMenu').classList.remove('open'); }

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}
