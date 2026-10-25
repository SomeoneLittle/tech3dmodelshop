/* Общий слой: шапка/подвал, язык, меню, поиск, панель избранного, уведомления, хелперы шаблонов и карточек. */
(function () {
  var S = window.PolyxStore, D = window.POLYX_DATA, SHELL = window.POLYX_SHELL, I = window.PolyxI18n;
  var P = window.Polyx = {};

  /* ---------- хелперы ---------- */
  P.t = I.t; P.lang = I.lang; P.date = I.date;
  P.esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  P.param = function (k) { return new URLSearchParams(location.search).get(k); };
  P.productUrl = function (id) { return 'product.html?id=' + encodeURIComponent(id); };
  P.postUrl = function (id) { return 'post.html?id=' + encodeURIComponent(id); };

  function setText(el, v) {
    v = String(v);
    for (var i = el.childNodes.length - 1; i >= 0; i--) {
      var c = el.childNodes[i];
      if (c.nodeType === 3 && c.nodeValue.trim()) { c.nodeValue = (/^\s/.test(c.nodeValue) ? ' ' : '') + v; return; }
    }
    if (el.children.length === 0) el.textContent = v; else el.appendChild(document.createTextNode(' ' + v));
  }
  P.setText = setText;
  /* Заполняет клон шаблона: data-b (текст), data-b-html, data-b-src/alt/href */
  P.fill = function (root, f) {
    var all = [root].concat([].slice.call(root.querySelectorAll('*')));
    all.forEach(function (el) {
      var d = el.dataset; if (!d) return;
      if (d.b && d.b in f) setText(el, f[d.b]);
      if (d.bHtml && d.bHtml in f) el.innerHTML = f[d.bHtml];
      if (d.bSrc && d.bSrc in f) el.setAttribute('src', f[d.bSrc]);
      if (d.bAlt && d.bAlt in f) el.setAttribute('alt', f[d.bAlt]);
      if (d.bHref && d.bHref in f) el.setAttribute('href', f[d.bHref]);
    });
  };
  P.clone = function (id) { return document.getElementById(id).content.firstElementChild.cloneNode(true); };
  P.html = function (s) { var d = document.createElement('div'); d.innerHTML = s.trim(); return d.firstElementChild; };
  var CAT = { mechs: 'Mechs & Robots', vehicles: 'Vehicles', weapons: 'Weapons & Sci-Fi', characters: 'Characters & Armor', environments: 'Modular Environments', props: 'Props', shaders: 'Shader Packs' };
  P.catName = function (cat) { return CAT[cat] || cat; };
  /* Склонение для украинского: 1 модель, 2-4 моделі, 5+ моделей */
  P.plural = function (n, one, few, many) {
    if (P.lang !== 'uk') return n === 1 ? one : many;
    var a = n % 10, b = n % 100;
    return (a === 1 && b !== 11) ? one : (a >= 2 && a <= 4 && (b < 12 || b > 14)) ? few : many;
  };

  /* ---------- уведомления ---------- */
  var toastBox;
  P.toast = function (msg, icon) {
    if (!toastBox) {
      toastBox = document.createElement('div');
      toastBox.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] flex flex-col items-center gap-2 pointer-events-none';
      document.body.appendChild(toastBox);
    }
    var t = document.createElement('div');
    t.className = 'polyx-toast flex items-center gap-2 bg-surface-container-high border border-outline-variant/50 text-on-surface font-label-md text-label-md px-space-md py-2.5 rounded-lg shadow-2xl';
    t.innerHTML = '<span class="material-symbols-outlined text-primary text-[18px]">' + (icon || 'check_circle') + '</span><span>' + P.esc(P.t(msg)) + '</span>';
    toastBox.appendChild(t);
    setTimeout(function () { t.style.opacity = '0'; t.style.transform = 'translateY(8px)'; }, 2200);
    setTimeout(function () { t.remove(); }, 2600);
  };

  /* ---------- избранное ---------- */
  P.wishToggle = function (id) {
    var on = S.toggleWish(id);
    P.toast(on ? 'Added to favorites' : 'Removed from favorites', on ? 'favorite' : 'heart_minus');
    return on;
  };
  P.wishIconState = function (btn, id) {
    var on = S.isWish(id), ic = btn.querySelector('[data-wish-icon]') || btn.querySelector('.material-symbols-outlined');
    if (ic) ic.classList.toggle('fill', on);
    btn.classList.toggle('text-primary', on);
    btn.classList.toggle('text-on-surface-variant', !on);
  };

  /* ---------- площадки и карточка модели ---------- */
  /* Кнопки «где взять»: по одной на площадку, ссылка из models[].links */
  P.storeLinks = function (m, big) {
    return (m.links || []).map(function (l) {
      var pl = S.platform(l.platform); if (!pl) return '';
      return '<a class="px-store' + (big ? ' px-store-lg' : '') + '" data-store="' + pl.id + '" href="' + P.esc(l.url) + '" target="_blank" rel="noopener noreferrer">' +
        '<span class="flex items-center gap-1.5"><span class="material-symbols-outlined">' + pl.icon + '</span>' + P.esc(pl.name) + '</span>' +
        (big ? '<span class="material-symbols-outlined">open_in_new</span>' : '') + '</a>';
    }).join('');
  };
  P.modelCard = function (m, i) {
    var chips = m.chips.slice(0, 3).map(function (c, k) {
      return '<span class="bg-surface-container-lowest/80 backdrop-blur-md ' + (k === 0 ? 'text-primary font-semibold' : 'text-on-surface') + ' px-2 py-0.5 rounded">' + P.esc(c) + '</span>';
    }).join('');
    var n = P.html(
      '<article class="asset-card group bg-surface-container-low rounded-xl overflow-hidden flex flex-col justify-between border border-outline-variant/20 hover:border-primary transition-all duration-200 cursor-pointer polyx-in" data-id="' + m.id + '" style="animation-delay:' + ((i || 0) * 45) + 'ms">' +
      '<div class="relative w-full aspect-[16/10] bg-surface-container overflow-hidden">' +
      '<img alt="' + P.esc(m.title) + '" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" src="' + m.img + '"/>' +
      '<div class="absolute top-2.5 left-2.5 flex items-center gap-1 font-code-tech text-[10px]">' + chips + (m.free ? '<span class="bg-primary text-on-primary font-bold px-2 py-0.5 rounded">FREE</span>' : '') + '</div>' +
      '<button aria-label="Add to favorites" class="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-surface-container-lowest/70 backdrop-blur-md text-on-surface-variant hover:text-primary transition-colors" data-action="wish" type="button"><span class="material-symbols-outlined text-[18px] block" data-wish-icon="1">favorite</span></button>' +
      '<div class="absolute bottom-2 left-2.5 flex items-center gap-2 font-code-tech text-[10px] text-on-surface-variant bg-surface-container-lowest/90 px-2 py-0.5 rounded"><span>' + P.esc(m.tris) + '</span><span>•</span><span>' + P.esc(m.extra) + '</span></div></div>' +
      '<div class="p-space-md flex-1 flex flex-col justify-between space-y-space-sm"><div>' +
      '<div class="text-on-surface-variant font-code-tech text-label-sm mb-1 uppercase tracking-wider">' + P.esc(m.catLabel) + '</div>' +
      '<h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1">' + P.esc(m.title) + '</h3>' +
      '<p class="font-body-sm text-body-sm text-on-surface-variant mt-1">' + P.esc(m.sub) + '</p></div>' +
      '<div class="pt-space-sm border-t border-outline-variant/20"><div class="font-code-tech text-[10px] text-outline uppercase tracking-wider mb-1">Available on</div>' +
      '<div class="flex flex-wrap gap-1.5">' + P.storeLinks(m) + '</div></div></div></article>');
    P.wishIconState(n.querySelector('[data-action=wish]'), m.id);
    return n;
  };
  /* Общий клик по сетке карточек: избранное, внешние ссылки, переход к модели */
  P.bindCards = function (box) {
    box.addEventListener('click', function (e) {
      var art = e.target.closest('article[data-id]'); if (!art) return;
      if (e.target.closest('a')) return;
      var act = e.target.closest('[data-action]');
      if (act && act.dataset.action === 'wish') { P.wishToggle(art.dataset.id); P.wishIconState(act, art.dataset.id); return; }
      location.href = P.productUrl(art.dataset.id);
    });
    document.addEventListener('polyx:change', function () {
      box.querySelectorAll('article[data-id]').forEach(function (a) { P.wishIconState(a.querySelector('[data-action=wish]'), a.dataset.id); });
    });
  };

  /* ---------- шапка и подвал ---------- */
  var hdr = document.getElementById('site-header'), ftr = document.getElementById('site-footer');
  if (hdr) hdr.innerHTML = SHELL.header;
  if (ftr) ftr.innerHTML = SHELL.footer;

  var yr = document.getElementById('ftr-year'); if (yr) yr.textContent = new Date().getFullYear();
  var soc = document.getElementById('ftr-social');
  if (soc) {
    var C = D.contact, items = [['artstation', 'brush', 'ArtStation'], ['sketchfab', '3d_rotation', 'Sketchfab'], ['youtube', 'play_circle', 'YouTube'], ['telegram', 'send', 'Telegram'], ['discord', 'forum', 'Discord']];
    soc.innerHTML = items.filter(function (x) { return C[x[0]]; }).map(function (x) {
      return '<a aria-label="' + x[2] + '" class="hover:text-primary transition-colors flex items-center" href="' + P.esc(C[x[0]]) + '" target="_blank" rel="noopener noreferrer"><span class="material-symbols-outlined text-[20px]">' + x[1] + '</span></a>';
    }).join('') + (C.email ? '<a aria-label="Email" class="hover:text-primary transition-colors flex items-center" href="mailto:' + P.esc(C.email) + '"><span class="material-symbols-outlined text-[20px]">mail</span></a>' : '');
  }

  /* ---------- фон: геометрическая абстракция ---------- */
  var bg = document.createElement('div');
  bg.id = 'bg-art'; bg.className = 'fixed inset-0 -z-10 pointer-events-none overflow-hidden';
  bg.innerHTML = SHELL.bg;
  document.body.insertBefore(bg, document.body.firstChild);

  /* ---------- язык ---------- */
  document.querySelectorAll('#hdr-lang button').forEach(function (b) {
    b.classList.toggle('is-on', b.dataset.lang === I.lang);
    b.addEventListener('click', function () { if (b.dataset.lang !== I.lang) I.set(b.dataset.lang); });
  });

  /* ---------- мобильное меню ---------- */
  var burger = document.getElementById('hdr-burger'), mnav = document.getElementById('mnav');
  if (burger && mnav) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      var on = mnav.classList.toggle('is-open');
      burger.querySelector('.material-symbols-outlined').textContent = on ? 'close' : 'menu';
    });
    document.addEventListener('click', function (e) { if (!mnav.contains(e.target)) { mnav.classList.remove('is-open'); burger.querySelector('.material-symbols-outlined').textContent = 'menu'; } });
  }

  /* ---------- выбор акцентного цвета ---------- */
  var ACCENTS = [['green', 'Mint', '#56f1c2'], ['red', 'Rose', '#f15675'], ['blue', 'Sky', '#56b1f1'], ['orange', 'Amber', '#f19e56'], ['violet', 'Violet', '#9656f1']];
  function currentAccent() { return document.documentElement.getAttribute('data-accent') || 'green'; }
  function setAccent(id) {
    if (id === 'green') document.documentElement.removeAttribute('data-accent'); else document.documentElement.setAttribute('data-accent', id);
    try { localStorage.setItem('polyx:accent', id); } catch (e) {}
    renderTheme();
  }
  var themeBtn = document.getElementById('hdr-theme');
  var themeBox = document.createElement('div');
  themeBox.className = 'hidden fixed z-[80] w-48 bg-surface-container-low border border-outline-variant/40 rounded-xl shadow-2xl p-2';
  document.body.appendChild(themeBox);
  function renderTheme() {
    var cur = currentAccent();
    themeBox.innerHTML = '<div class="px-2 pt-1 pb-2 font-code-tech text-[10px] uppercase tracking-widest text-on-surface-variant">Accent color</div>' +
      ACCENTS.map(function (a) {
        var on = a[0] === cur;
        return '<button type="button" data-accent-pick="' + a[0] + '" class="w-full flex items-center gap-3 px-2 py-2 rounded-lg ' + (on ? 'bg-surface-container-high text-on-surface' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface') + ' font-label-md text-label-md transition-colors">' +
          '<span class="w-5 h-5 rounded-full border border-white/20 shrink-0 transition-transform ' + (on ? 'scale-110 ring-2 ring-offset-2 ring-offset-surface-container-high ring-white/60' : '') + '" style="background:' + a[2] + '"></span>' +
          '<span class="flex-1 text-left">' + a[1] + '</span>' + (on ? '<span class="material-symbols-outlined text-[16px]">check</span>' : '') + '</button>';
      }).join('');
  }
  function placeTheme() {
    var r = themeBtn.getBoundingClientRect();
    themeBox.style.top = (r.bottom + 10) + 'px'; themeBox.style.right = Math.max(8, window.innerWidth - r.right - 4) + 'px';
  }
  if (themeBtn) {
    renderTheme();
    themeBtn.addEventListener('click', function (e) {
      e.stopPropagation(); placeTheme(); themeBox.classList.toggle('hidden');
    });
    themeBox.addEventListener('click', function (e) {
      var b = e.target.closest('[data-accent-pick]'); if (b) setAccent(b.dataset.accentPick);
    });
    document.addEventListener('click', function (e) { if (!themeBox.contains(e.target)) themeBox.classList.add('hidden'); });
    window.addEventListener('resize', function () { themeBox.classList.add('hidden'); });
  }

  /* ---------- активный пункт меню ---------- */
  var active = document.body.dataset.active || '';
  var nav = document.querySelector('header nav[data-active-classes]');
  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) {
      var is = a.dataset.path === active;
      a.className = (is ? 'text-primary' : 'text-on-surface-variant hover:text-primary') + ' py-space-sm font-label-md text-label-md transition-colors';
      if (is) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }
  if (mnav) mnav.querySelectorAll('a').forEach(function (a) { a.classList.toggle('is-active', a.dataset.path === active); });

  function badges() {
    var w = S.wish().length, wb = document.getElementById('hdr-wish-count');
    if (!wb) return;
    var changedNow = wb.textContent !== String(w);
    wb.textContent = w; wb.classList.toggle('hidden', w === 0);
    if (changedNow) { wb.classList.remove('polyx-pop'); void wb.offsetWidth; wb.classList.add('polyx-pop'); }
  }

  /* ---------- панель избранного ---------- */
  var overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-200';
  var drawer = document.createElement('aside');
  drawer.className = 'fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-surface-container-low border-l border-outline-variant/30 shadow-2xl translate-x-full transition-transform duration-300 flex flex-col';
  drawer.innerHTML =
    '<div class="h-16 shrink-0 flex items-center justify-between px-space-md border-b border-outline-variant/30">' +
    '<div class="flex items-center gap-space-xs font-headline-sm text-headline-sm text-on-surface"><span class="material-symbols-outlined text-primary fill">favorite</span><span>Favorites</span> <span id="wd-count" class="font-code-tech text-label-sm text-on-surface-variant"></span></div>' +
    '<button id="wd-close" type="button" aria-label="Close" class="p-space-xs rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all"><span class="material-symbols-outlined">close</span></button></div>' +
    '<div id="wd-list" class="flex-1 overflow-y-auto p-space-md space-y-space-sm"></div>' +
    '<div class="shrink-0 p-space-md border-t border-outline-variant/30"><a href="account.html" class="w-full inline-flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-primary font-label-md text-label-md transition-colors"><span>Open my account</span><span class="material-symbols-outlined text-[18px]">arrow_forward</span></a></div>';
  document.body.appendChild(overlay); document.body.appendChild(drawer);

  function renderDrawer() {
    var list = document.getElementById('wd-list'), ids = S.wish();
    document.getElementById('wd-count').textContent = ids.length ? '(' + ids.length + ')' : '';
    if (!ids.length) {
      list.innerHTML = '<div class="text-center py-space-2xl text-on-surface-variant"><span class="material-symbols-outlined text-[40px] text-outline">heart_broken</span><p class="font-body-md text-body-md mt-space-sm">No favorites yet</p><p class="font-body-sm text-body-sm text-on-surface-variant/70">Tap the heart on any model to save it here.</p></div>';
      return;
    }
    list.innerHTML = ids.map(function (id) {
      var m = S.byId[id];
      return '<div class="polyx-in flex gap-space-sm bg-surface-container rounded-xl p-space-xs border border-outline-variant/20 hover:border-primary/60 transition-colors" data-id="' + m.id + '">' +
        '<a href="' + P.productUrl(m.id) + '" class="shrink-0"><img class="w-20 h-16 rounded-lg object-cover" src="' + m.img + '" alt="' + P.esc(m.title) + '"></a>' +
        '<div class="min-w-0 flex-1 flex flex-col justify-between"><a href="' + P.productUrl(m.id) + '" class="font-headline-sm text-[15px] leading-5 text-on-surface hover:text-primary transition-colors line-clamp-2">' + P.esc(m.title) + '</a>' +
        '<div class="flex items-center justify-between"><span class="font-code-tech text-label-sm text-on-surface-variant">' + P.esc(m.tris) + '</span>' +
        '<button type="button" data-act="wd-remove" aria-label="Remove" class="p-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-error transition-colors"><span class="material-symbols-outlined text-[16px] block">delete</span></button></div></div></div>';
    }).join('');
  }
  function openDrawer() { renderDrawer(); overlay.classList.remove('opacity-0', 'pointer-events-none'); drawer.classList.remove('translate-x-full'); }
  function closeDrawer() { overlay.classList.add('opacity-0', 'pointer-events-none'); drawer.classList.add('translate-x-full'); }
  overlay.addEventListener('click', closeDrawer);
  drawer.querySelector('#wd-close').addEventListener('click', closeDrawer);
  drawer.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]'); if (!b) return;
    if (b.dataset.act === 'wd-remove') { S.toggleWish(b.closest('[data-id]').dataset.id); renderDrawer(); }
  });
  var wishBtn = document.getElementById('hdr-wish'); if (wishBtn) wishBtn.addEventListener('click', openDrawer);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeDrawer(); closeSearch(); themeBox.classList.add('hidden'); } });

  /* ---------- поиск в шапке (по моделям) ---------- */
  var sInput = document.getElementById('hdr-search'), sWrap = document.getElementById('hdr-search-wrap');
  var sBox = document.createElement('div');
  sBox.className = 'hidden absolute top-full right-0 mt-2 w-[420px] max-w-[90vw] bg-surface-container-low border border-outline-variant/40 rounded-xl shadow-2xl overflow-hidden z-50';
  if (sWrap) sWrap.appendChild(sBox);
  function closeSearch() { sBox.classList.add('hidden'); }
  function searchList(q) {
    q = q.trim().toLowerCase(); if (!q) return [];
    return S.catalog().filter(function (m) { return (m.title + ' ' + m.catLabel + ' ' + m.sub).toLowerCase().indexOf(q) > -1; });
  }
  function renderSearch() {
    var q = sInput.value, res = searchList(q);
    if (!q.trim()) return closeSearch();
    sBox.classList.remove('hidden');
    if (!res.length) { sBox.innerHTML = '<div class="p-space-md font-body-sm text-body-sm text-on-surface-variant">' + P.esc(P.t('No models found for “{q}”.', { q: q })) + '</div>'; return; }
    sBox.innerHTML = res.slice(0, 5).map(function (m) {
      return '<a href="' + P.productUrl(m.id) + '" class="flex items-center gap-space-sm px-space-sm py-2 hover:bg-surface-container-high transition-colors">' +
        '<img class="w-12 h-9 rounded object-cover" src="' + m.img + '" alt=""><div class="min-w-0 flex-1"><div class="font-body-md text-body-md text-on-surface truncate">' + P.esc(m.title) + '</div>' +
        '<div class="font-code-tech text-[10px] text-on-surface-variant uppercase tracking-wider">' + P.esc(P.t(m.catLabel)) + '</div></div></a>';
    }).join('') + '<a href="marketplace.html?q=' + encodeURIComponent(q) + '" class="flex items-center justify-between px-space-sm py-2.5 border-t border-outline-variant/30 font-label-md text-label-md text-primary hover:bg-surface-container-high transition-colors">' + P.esc(P.t('See all {n} results', { n: res.length })) + '<span class="material-symbols-outlined text-[16px]">arrow_forward</span></a>';
  }
  if (sInput) {
    sInput.addEventListener('input', renderSearch);
    sInput.addEventListener('focus', renderSearch);
    sInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && sInput.value.trim()) location.href = 'marketplace.html?q=' + encodeURIComponent(sInput.value.trim());
    });
    document.addEventListener('click', function (e) { if (sWrap && !sWrap.contains(e.target)) closeSearch(); });
    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); sInput.focus(); sInput.select(); }
    });
  }

  document.addEventListener('polyx:change', function () { badges(); if (!drawer.classList.contains('translate-x-full')) renderDrawer(); });
  badges();
})();
