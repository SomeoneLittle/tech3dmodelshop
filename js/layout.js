/* Общий слой: шапка/подвал, поиск, панель избранного, уведомления, хелперы шаблонов. */
(function () {
  var S = window.PolyxStore, D = window.POLYX_DATA, SHELL = window.POLYX_SHELL;
  var P = window.Polyx = {};

  /* ---------- хелперы ---------- */
  P.esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  P.param = function (k) { return new URLSearchParams(location.search).get(k); };
  P.productUrl = function (id) { return 'product.html?id=' + encodeURIComponent(id); };

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
  /* Чипы: внутри контейнера [data-chips] первые дочерние span — образцы стилей по индексу */
  P.chips = function (box, list) {
    if (!box._tpl) box._tpl = [].slice.call(box.children).map(function (n) { return n.cloneNode(true); });
    box.innerHTML = '';
    list.slice(0, 3).forEach(function (t, i) {
      var n = box._tpl[Math.min(i, box._tpl.length - 1)].cloneNode(true); n.textContent = t; box.appendChild(n);
    });
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
    t.innerHTML = '<span class="material-symbols-outlined text-primary text-[18px]">' + (icon || 'check_circle') + '</span><span>' + P.esc(msg) + '</span>';
    toastBox.appendChild(t);
    setTimeout(function () { t.style.opacity = '0'; t.style.transform = 'translateY(8px)'; }, 2200);
    setTimeout(function () { t.remove(); }, 2600);
  };

  /* ---------- действия, общие для карточек ---------- */
  P.add = function (id, lic) {
    var m = S.byId[id], isNew = S.addToCart(id, lic);
    P.toast(isNew ? m.title + ' added to cart' : m.title + ' is already in your cart', isNew ? 'shopping_cart' : 'info');
    return isNew;
  };
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

  /* ---------- шапка и подвал ---------- */
  var hdr = document.getElementById('site-header'), ftr = document.getElementById('site-footer');
  if (hdr) hdr.innerHTML = SHELL.header;
  if (ftr) ftr.innerHTML = SHELL.footer;

  var active = document.body.dataset.active || '';
  var nav = document.querySelector('header nav[data-active-classes]');
  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) {
      var is = a.dataset.path === active;
      a.className = (is ? 'text-primary' : 'text-on-surface-variant hover:text-primary') + ' py-space-sm font-label-md text-label-md transition-colors';
      if (is) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }

  function badges() {
    var w = S.wish().length, c = S.cart().length;
    var wb = document.getElementById('hdr-wish-count'), cb = document.getElementById('hdr-cart-count');
    [[wb, w], [cb, c]].forEach(function (p) {
      if (!p[0]) return;
      var changedNow = p[0].textContent !== String(p[1]);
      p[0].textContent = p[1]; p[0].classList.toggle('hidden', p[1] === 0);
      if (changedNow) { p[0].classList.remove('polyx-pop'); void p[0].offsetWidth; p[0].classList.add('polyx-pop'); }
    });
  }

  /* ---------- панель избранного ---------- */
  var overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-200';
  var drawer = document.createElement('aside');
  drawer.className = 'fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-surface-container-low border-l border-outline-variant/30 shadow-2xl translate-x-full transition-transform duration-300 flex flex-col';
  drawer.innerHTML =
    '<div class="h-16 shrink-0 flex items-center justify-between px-space-md border-b border-outline-variant/30">' +
    '<div class="flex items-center gap-space-xs font-headline-sm text-headline-sm text-on-surface"><span class="material-symbols-outlined text-primary fill">favorite</span>Favorites <span id="wd-count" class="font-code-tech text-label-sm text-on-surface-variant"></span></div>' +
    '<button id="wd-close" type="button" aria-label="Close" class="p-space-xs rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all"><span class="material-symbols-outlined">close</span></button></div>' +
    '<div id="wd-list" class="flex-1 overflow-y-auto p-space-md space-y-space-sm"></div>' +
    '<div class="shrink-0 p-space-md border-t border-outline-variant/30"><a href="marketplace.html" class="w-full inline-flex items-center justify-center gap-space-xs py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-primary font-label-md text-label-md transition-colors">Browse marketplace<span class="material-symbols-outlined text-[18px]">arrow_forward</span></a></div>';
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
        '<div class="flex items-center justify-between"><span class="font-code-tech text-label-md text-primary font-bold">' + S.priceText(m) + '</span>' +
        '<div class="flex items-center gap-1"><button type="button" data-act="wd-add" aria-label="Add to cart" class="p-1.5 rounded-lg bg-primary hover:bg-secondary text-on-primary transition-colors"><span class="material-symbols-outlined text-[16px] block">add_shopping_cart</span></button>' +
        '<button type="button" data-act="wd-remove" aria-label="Remove" class="p-1.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-error transition-colors"><span class="material-symbols-outlined text-[16px] block">delete</span></button></div></div></div></div>';
    }).join('');
  }
  function openDrawer() { renderDrawer(); overlay.classList.remove('opacity-0', 'pointer-events-none'); drawer.classList.remove('translate-x-full'); }
  function closeDrawer() { overlay.classList.add('opacity-0', 'pointer-events-none'); drawer.classList.add('translate-x-full'); }
  overlay.addEventListener('click', closeDrawer);
  drawer.querySelector('#wd-close').addEventListener('click', closeDrawer);
  drawer.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]'); if (!b) return;
    var id = b.closest('[data-id]').dataset.id;
    if (b.dataset.act === 'wd-add') P.add(id);
    if (b.dataset.act === 'wd-remove') { S.toggleWish(id); renderDrawer(); }
  });
  var wishBtn = document.getElementById('hdr-wish'); if (wishBtn) wishBtn.addEventListener('click', openDrawer);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeDrawer(); closeSearch(); } });

  /* ---------- поиск в шапке ---------- */
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
    if (!res.length) { sBox.innerHTML = '<div class="p-space-md font-body-sm text-body-sm text-on-surface-variant">No assets found for “' + P.esc(q) + '”.</div>'; return; }
    sBox.innerHTML = res.slice(0, 5).map(function (m) {
      return '<a href="' + P.productUrl(m.id) + '" class="flex items-center gap-space-sm px-space-sm py-2 hover:bg-surface-container-high transition-colors">' +
        '<img class="w-12 h-9 rounded object-cover" src="' + m.img + '" alt=""><div class="min-w-0 flex-1"><div class="font-body-md text-body-md text-on-surface truncate">' + P.esc(m.title) + '</div>' +
        '<div class="font-code-tech text-[10px] text-on-surface-variant uppercase tracking-wider">' + P.esc(m.catLabel) + '</div></div><span class="font-code-tech text-label-md text-primary font-bold">' + S.priceText(m) + '</span></a>';
    }).join('') + '<a href="marketplace.html?q=' + encodeURIComponent(q) + '" class="flex items-center justify-between px-space-sm py-2.5 border-t border-outline-variant/30 font-label-md text-label-md text-primary hover:bg-surface-container-high transition-colors">See all ' + res.length + ' results<span class="material-symbols-outlined text-[16px]">arrow_forward</span></a>';
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
    var q0 = P.param('q'); if (q0 && document.body.dataset.page === 'marketplace') sInput.value = '';
  }

  /* ---------- подписка в подвале ---------- */
  var nf = document.getElementById('newsletter-form');
  if (nf) nf.addEventListener('submit', function (e) { e.preventDefault(); nf.reset(); P.toast('Subscribed (demo — nothing is sent)', 'mail'); });

  document.addEventListener('polyx:change', function () { badges(); if (!drawer.classList.contains('translate-x-full')) renderDrawer(); });
  badges();
})();
