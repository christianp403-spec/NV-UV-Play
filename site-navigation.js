'use strict';
(() => {
  // Keep previously shared single-page links working after the page split.
  const english = document.documentElement.lang === 'en';
  const featureAnchors = new Set(['guide','guide-title','feature-panel','category-tabs','category-description','feature-grid','alltag','scenarios-title','alltag-einstieg','einfach-starten','play-standalone','telemetrie','alltag-spielen','alltag-feintuning','fan-modus']);
  const startAnchors = new Set(['start','start-title','faq','faq-title']);
  function routeLegacyAnchor() {
    if (document.body.dataset.page !== 'home') return;
    const anchor = location.hash.slice(1);
    const destination = featureAnchors.has(anchor) ? (english ? 'features.html' : 'funktionen.html') : startAnchors.has(anchor) ? (english ? 'get-started.html' : 'loslegen.html') : null;
    if (destination) location.replace(destination + location.hash);
  }
  routeLegacyAnchor();
  window.addEventListener('hashchange', routeLegacyAnchor);
})();
