/* reveal.js — shared scroll-reveal for all DesignDay pages
   Elements with [data-reveal] fade+slide up when they enter the viewport.
   Siblings with the same [data-reveal-group] value stagger automatically.
   Respects prefers-reduced-motion.
*/
(function () {
  'use strict';

  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* Inject CSS once */
  var style = document.createElement('style');
  style.textContent = [
    '[data-reveal]{opacity:0;transform:translateY(22px);transition:opacity .55s cubic-bezier(.22,1,.36,1),transform .55s cubic-bezier(.22,1,.36,1);}',
    '[data-reveal].r-in{opacity:1;transform:none;}',
  ].join('');
  document.head.appendChild(style);

  /* Observe every [data-reveal] element */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var delay = el.getAttribute('data-reveal-delay') || 0;
      setTimeout(function () {
        el.classList.add('r-in');
      }, Number(delay));
      observer.unobserve(el);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  /* Auto-discover elements and assign stagger delays within groups */
  function init() {
    /* Generic selectors that apply on every inner page */
    var AUTO_SELECTORS = [
      /* headings / eyebrows */
      '.page-eyebrow', '.page-title', '.page-subtitle',
      '.section-label',
      /* about sections */
      '.what-left h2', '.what-left p', '.stat-cell',
      '.why-header', '.why-paras p', '.why-quote',
      '.who-body', '.who-img',
      '.section-cta .inner > *',
      /* events page */
      '.events-header', '.event-card',
      /* contact page */
      '.left > *', '.right > *',
      /* edition page */
      '.detail-header', '.detail-body > *',
      /* generic utility — anything already marked */
    ];

    AUTO_SELECTORS.forEach(function (sel) {
      var els = document.querySelectorAll(sel);
      els.forEach(function (el, i) {
        if (el.hasAttribute('data-reveal')) return; /* already marked */
        el.setAttribute('data-reveal', '');
        el.setAttribute('data-reveal-delay', String(i * 60));
        observer.observe(el);
      });
    });

    /* Also observe anything the page author marked manually */
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
