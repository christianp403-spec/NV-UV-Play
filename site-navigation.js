'use strict';
(() => {
  // Keep previously shared single-page links working after the page split.
  const english = document.documentElement.lang === 'en';
  const featureAnchors = new Set(['guide','guide-title','feature-panel','category-tabs','category-description','feature-grid','alltag','scenarios-title','alltag-einstieg','einfach-starten','play-standalone','telemetrie','alltag-spielen','alltag-feintuning','fan-modus']);
  const newsAnchors = new Set(['updates-214','update-214-title','updates-213','update-213-title','updates-212','update-212-title','updates-211','update-211-title','updates-210','update-210-title','updates-2017','update-2017-title','updates-2016','update-2016-title','updates-2015','update-title']);
  const startAnchors = new Set(['start','start-title','faq','faq-title']);
  function routeLegacyAnchor() {
    const anchor = location.hash.slice(1);
    const currentAnchor = ({'updates-2017':'updates-210','update-2017-title':'update-210-title'})[anchor] || anchor;
    if (currentAnchor !== anchor && document.body.dataset.page === 'news') {
      location.replace('#' + currentAnchor);
      return;
    }
    if (newsAnchors.has(anchor) && document.body.dataset.page !== 'news') {
      location.replace((english ? 'news.html' : 'neuigkeiten.html') + '#' + currentAnchor);
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

(() => {
  // Shared links and the language switch reveal the requested archived version.
  function revealArchivedNews() {
    if (document.body.dataset.page !== 'news' || !location.hash) return;
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    const archive = target?.closest('details.news-archive');
    if (archive && !archive.open) {
      archive.open = true;
      target.scrollIntoView({block: 'start'});
    }
  }
  revealArchivedNews();
  window.addEventListener('hashchange', revealArchivedNews);
})();
