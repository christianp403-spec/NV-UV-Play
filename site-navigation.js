'use strict';
(() => {
  // Keep previously shared single-page links working after the page split.
  const english = document.documentElement.lang === 'en';
  const featureAnchors = new Set(['guide','guide-title','feature-panel','category-tabs','category-description','feature-grid','alltag','scenarios-title','alltag-einstieg','einfach-starten','play-standalone','telemetrie','alltag-spielen','alltag-feintuning','fan-modus']);
  const newsAnchors = new Set(['updates-2017','update-2017-title','updates-2016','update-2016-title','updates-2015','update-title']);
  const startAnchors = new Set(['start','start-title','faq','faq-title']);
  function routeLegacyAnchor() {
    const anchor = location.hash.slice(1);
    if (newsAnchors.has(anchor) && document.body.dataset.page !== 'news') {
      location.replace((english ? 'news.html' : 'neuigkeiten.html') + location.hash);
      return;
    }
    if (document.body.dataset.page !== 'home') return;
    const destination = featureAnchors.has(anchor) ? (english ? 'features.html' : 'funktionen.html') : startAnchors.has(anchor) ? (english ? 'get-started.html' : 'loslegen.html') : null;
    if (destination) location.replace(destination + location.hash);
  }
  routeLegacyAnchor();
  window.addEventListener('hashchange', routeLegacyAnchor);
})();

(() => {
  const dialog = document.querySelector('#contact-dialog');
  const trigger = document.querySelector('#open-contact');
  if (!dialog || !trigger) return;

  trigger.addEventListener('click', () => {
    dialog.showModal();
    document.body.classList.add('contact-open');
  });
  dialog.querySelector('#close-contact').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('contact-open');
    trigger.focus({preventScroll: true});
  });
})();
