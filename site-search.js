'use strict';
(() => {
  const english = document.documentElement.lang === 'en';
  const labels = english ? {
    title: 'Search results', close: 'Close search results',
    input: 'Search the website', placeholder: 'Search…',
    hint: 'Search features, help and updates. Combine several words to narrow the results.',
    short: 'Enter at least two characters.', loading: 'Searching the website…',
    empty: 'No results. Try a different term or fewer words.',
    partial: 'Some pages could not be loaded. The results may be incomplete.',
    retry: 'Try again', more: 'Show more results',
    count: (shown, total) => `${total} ${total === 1 ? 'result' : 'results'}${shown < total ? ` · showing ${shown}` : ''}`,
    pages: [['en.html', 'Discover Play'], ['get-started.html', 'Get started & FAQ'],
      ['features.html', 'Features'], ['news.html', 'Play news'], ['success-stories.html', 'Success stories']]
  } : {
    title: 'Suchergebnisse', close: 'Suchergebnisse schließen',
    input: 'Website durchsuchen', placeholder: 'Suchen…',
    hint: 'Durchsuche Funktionen, Hilfe und Updates. Mehrere Wörter grenzen die Treffer ein.',
    short: 'Gib mindestens zwei Zeichen ein.', loading: 'Website wird durchsucht…',
    empty: 'Keine Treffer. Versuche einen anderen Begriff oder weniger Wörter.',
    partial: 'Einige Seiten konnten nicht geladen werden. Die Treffer sind möglicherweise unvollständig.',
    retry: 'Erneut versuchen', more: 'Weitere Treffer anzeigen',
    count: (shown, total) => `${total} Treffer${shown < total ? ` · ${shown} angezeigt` : ''}`,
    pages: [['index.html', 'Play entdecken'], ['loslegen.html', 'Loslegen & FAQ'],
      ['funktionen.html', 'Kennenlernen'], ['neuigkeiten.html', 'Play-Neuigkeiten'], ['erfolgsgeschichten.html', 'Erfolgsgeschichten']]
  };
  const headingSelector = 'h1,h2,h3,h4,h5,h6,summary';
  const excluded = 'nav,button,script,style,noscript,svg,figure,.eyebrow,[hidden],#feature-grid,#category-tabs,#main-screen';
  const clean = text => text.replace(/\s+/g, ' ').trim();
  const normalize = text => {
    const plain = text.toLocaleLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/ß/g, 'ss');
    return english ? plain : plain.replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u');
  };

  // The same deterministic anchors are assigned to fetched pages and the live page.
  // Existing shared anchors stay intact; new content needs no separate search index.
  function prepareHeadings(doc) {
    doc.querySelectorAll('main ' + headingSelector.split(',').join(',main ')).forEach(heading => {
      if (heading.id || heading.closest(excluded)) return;
      const slug = normalize(clean(heading.textContent)).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
      const base = 'search-' + slug;
      let id = base;
      let suffix = 2;
      while (doc.getElementById(id)) id = base + '-' + suffix++;
      heading.id = id;
    });
  }
  prepareHeadings(document);

  function revealSearchTarget() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (!target?.closest('main')) return;
    let parent = target;
    while (parent) {
      if (parent.tagName === 'DETAILS') parent.open = true;
      parent = parent.parentElement;
    }
    if (id.startsWith('search-')) {
      target.scrollIntoView({block: 'start'});
      if (!target.hasAttribute('tabindex')) target.tabIndex = -1;
      target.focus({preventScroll: true});
    }
  }
  revealSearchTarget();
  window.addEventListener('hashchange', revealSearchTarget);

  function extract(doc, page, category) {
    prepareHeadings(doc);
    const main = doc.querySelector('main');
    if (!main) throw new Error('Missing page content');
    const entries = [];
    const path = [];
    let current = null;
    const walker = doc.createTreeWalker(main, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const element = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
      if (element.closest(excluded)) continue;
      if (node.nodeType === Node.ELEMENT_NODE && node.matches(headingSelector)) {
        const title = clean(node.textContent);
        const level = node.tagName === 'SUMMARY' ? 7 : Number(node.tagName.slice(1));
        while (path.length && path.at(-1).level >= level) path.pop();
        const release = node.closest('.update-preview') || node.closest('.news-archive')?.querySelector('.update-preview');
        const version = release?.querySelector('.eyebrow')?.textContent.match(/\d+\.\d+\.\d+/)?.[0] || '';
        current = {title, context: path.map(item => item.title).join(' · '), category, version,
          url: page + '#' + encodeURIComponent(node.id), text: ''};
        entries.push(current);
        if (level < 7) path.push({level, title});
      } else if (node.nodeType === Node.TEXT_NODE && current && !element.closest(headingSelector)) {
        current.text += ' ' + node.textContent;
      }
    }
    return entries.map(entry => ({...entry, text: clean(entry.text)}));
  }

  const create = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };
  const actions = document.querySelector('.header-actions');
  if (!actions) return;
  const searchBox = create('div', 'site-search');
  const panel = create('section', 'site-search-panel');
  panel.id = 'site-search-panel';
  panel.hidden = true;
  panel.setAttribute('aria-label', labels.title);
  const close = create('button', 'site-search-close', '×');
  close.type = 'button';
  close.setAttribute('aria-label', labels.close);
  const form = create('form', 'site-search-form');
  form.setAttribute('role', 'search');
  const label = create('label', 'site-search-label', labels.input);
  label.htmlFor = 'site-search-input';
  const input = create('input');
  input.id = 'site-search-input';
  input.type = 'search';
  input.placeholder = labels.placeholder;
  input.maxLength = 160;
  input.autocomplete = 'off';
  input.spellcheck = false;
  input.setAttribute('aria-controls', panel.id);
  input.setAttribute('aria-expanded', 'false');
  input.setAttribute('enterkeyhint', 'search');
  const hint = create('p', 'site-search-hint', labels.hint);
  hint.id = 'site-search-hint';
  form.append(label, input);
  const status = create('p', 'site-search-status');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  const warning = create('p', 'site-search-warning');
  const retry = create('button', 'button small', labels.retry);
  retry.type = 'button';
  retry.hidden = true;
  const results = create('ol', 'site-search-results');
  const more = create('button', 'button', labels.more);
  more.type = 'button';
  more.hidden = true;
  panel.append(close, hint, status, warning, retry, results, more);
  searchBox.append(form, panel);
  actions.prepend(searchBox);

  let entries = null;
  let loading = null;
  let incomplete = false;
  let limit = 15;
  let timer;
  function closeResults() {
    clearTimeout(timer);
    panel.hidden = true;
    input.setAttribute('aria-expanded', 'false');
  }
  async function loadIndex() {
    if (loading) return loading;
    loading = (async () => {
      const pages = await Promise.allSettled(labels.pages.map(async ([page, category]) => {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);
        try {
          const response = await fetch(page, {signal: controller.signal});
          if (!response.ok) throw new Error('Page unavailable');
          const doc = new DOMParser().parseFromString(await response.text(), 'text/html');
          return extract(doc, page, category);
        } finally { clearTimeout(timeout); }
      }));
      incomplete = pages.some(page => page.status === 'rejected');
      entries = pages.flatMap(page => page.status === 'fulfilled' ? page.value : []);
      entries.push(...(window.PLAY_SEARCH_FEATURES || []).map(entry => ({...entry, category: labels.pages[2][1], context: ''})));
      entries = entries.map(entry => ({...entry,
        haystack: normalize([entry.title, entry.version, entry.text].join(' ')), titleKey: normalize(entry.title)}));
    })();
    try { await loading; } finally { loading = null; }
  }

  function snippet(text, words) {
    const positions = words.map(word => normalize(text).indexOf(word)).filter(index => index >= 0);
    let start = positions.length ? Math.max(0, Math.min(...positions) - 65) : 0;
    if (start) start = text.lastIndexOf(' ', start) + 1;
    let end = Math.min(text.length, start + 240);
    if (end < text.length) {
      const space = text.lastIndexOf(' ', end);
      if (space > start) end = space;
    }
    return (start ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
  }
  function render() {
    if (panel.hidden) return;
    results.replaceChildren();
    more.hidden = true;
    warning.textContent = incomplete ? labels.partial : '';
    retry.hidden = !incomplete;
    const query = normalize(clean(input.value));
    const words = [...new Set(query.match(/[\p{L}\p{N}]+(?:\.\d+)*/gu) || [])];
    if (words.join('').length < 2) { status.textContent = input.value ? labels.short : ''; return; }
    if (!entries) { status.textContent = labels.loading; return; }
    const matches = entries.filter(entry => words.every(word => entry.haystack.includes(word)))
      .map(entry => ({entry, score: words.reduce((score, word) => score + (entry.titleKey.includes(word) ? 8 : 0), 0)
        + (entry.titleKey.includes(query) ? 12 : 0) + (entry.url.includes('#feature-') ? 2 : 0)}))
      .sort((a, b) => b.score - a.score);
    status.textContent = matches.length ? labels.count(Math.min(limit, matches.length), matches.length) : labels.empty;
    for (const {entry} of matches.slice(0, limit)) {
      const item = create('li');
      const link = create('a', 'site-search-result');
      link.href = entry.url;
      link.append(create('span', 'site-search-category', entry.category + (entry.version ? ' · ' + entry.version : '')), create('h3', '', entry.title));
      if (entry.context) link.append(create('span', 'site-search-context', entry.context));
      if (entry.text) link.append(create('p', '', snippet(entry.text, words)));
      item.append(link);
      results.append(item);
    }
    more.hidden = matches.length <= limit;
  }
  async function search() {
    if (!clean(input.value)) { closeResults(); return; }
    panel.hidden = false;
    input.setAttribute('aria-expanded', 'true');
    render();
    if (!entries) { await loadIndex(); render(); }
  }
  input.addEventListener('focus', search);
  input.addEventListener('click', () => { if (panel.hidden) search(); });
  close.addEventListener('click', () => { input.focus({preventScroll: true}); closeResults(); });
  searchBox.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) {
      event.preventDefault();
      input.focus({preventScroll: true});
      closeResults();
    } else if (event.key === 'ArrowDown' && event.target === input && !panel.hidden) {
      const first = results.querySelector('a');
      if (first) { event.preventDefault(); first.focus(); }
    }
  });
  document.addEventListener('pointerdown', event => {
    if (!searchBox.contains(event.target)) closeResults();
  });
  searchBox.addEventListener('focusout', event => {
    if (event.relatedTarget) {
      if (!searchBox.contains(event.relatedTarget)) closeResults();
      return;
    }
    // Hiding the exhausted "more" button briefly leaves focus on the body.
    // Let rendering move focus to the newly added result before checking it.
    setTimeout(() => {
      if (!searchBox.contains(document.activeElement)) closeResults();
    }, 0);
  });
  input.addEventListener('input', () => {
    clearTimeout(timer);
    limit = 15;
    if (!clean(input.value)) { closeResults(); return; }
    timer = setTimeout(search, 120);
  });
  form.addEventListener('submit', event => { event.preventDefault(); clearTimeout(timer); search(); });
  more.addEventListener('click', () => {
    const previous = results.children.length;
    limit += 15;
    render();
    results.children[previous]?.querySelector('a').focus();
  });
  retry.addEventListener('click', async () => {
    retry.disabled = true;
    status.textContent = labels.loading;
    await loadIndex();
    retry.disabled = false;
    render();
  });
  results.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    closeResults();
    // The same fragment can already be selected when a search is reopened.
    if (link.href === location.href) revealSearchTarget();
  });
})();
