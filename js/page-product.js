/* Страница модели (?id=...): галерея, режимы просмотра, где взять (ссылки на площадки), избранное, описание, похожие. */
(function () {
  var S = window.PolyxStore, P = window.Polyx, D = window.POLYX_DATA;
  var id = P.param('id') || 'apex-recon-mech-mk2', m = S.byId[id];
  if (!m) { location.replace('404.html'); return; }
  var isApex = m.id === 'apex-recon-mech-mk2';
  var $ = function (s) { return document.querySelector(s); };
  document.title = m.title + ' | POLYX.3D';

  var crumb = P.catName(m.cat);
  var cc = $('#crumb-cat'); cc.textContent = crumb; cc.href = D.crumb[m.cat] ? 'marketplace.html?category=' + m.cat : 'marketplace.html';
  $('#crumb-title').textContent = m.title;
  $('#p-title').textContent = m.title;
  $('#cat-tag').textContent = P.t(m.catLabel).toUpperCase().replace(' / ', ' // ');
  $('#tris-badge').textContent = m.tris.toUpperCase();
  $('#author-img').src = D.avatar;

  /* ----- где взять ----- */
  $('#store-list').innerHTML = P.storeLinks(m, true) || '<div class="font-body-sm text-body-sm text-on-surface-variant">Not published on other platforms yet.</div>';
  if (m.free) { $('#get-title').textContent = P.t('Get this model for free on'); $('#get-note').textContent = P.t('Free download. The license is set by the platform.'); }

  /* ----- галерея ----- */
  var LABELS = ['01. Hero Textured', '02. Wireframe Sub-D', '03. 4K PBR Channels', '04. Control Rig Armature', '05. UE5 In-Engine Lighting'];
  var FILTERS = ['', 'grayscale(1) contrast(1.4) brightness(.9)', 'hue-rotate(40deg) saturate(1.4)', 'grayscale(1) sepia(.4) hue-rotate(120deg) contrast(1.2) brightness(.85)', 'brightness(1.15) saturate(1.25)'];
  var gallery = isApex
    ? D.apexGallery.map(function (g) { return { img: g.img, label: g.label, filter: '' }; })
    : LABELS.map(function (l, i) { return { img: i === 0 ? (m.hero || m.img) : m.img, label: i === 0 ? 'Main render' : 'View ' + (i + 1), filter: FILTERS[i] }; });
  var sel = 0, mode = 'render';
  var mainImg = $('#main-viewport-image'), wire = $('#wireframe-mesh'), thumbs = $('#thumbs');
  function applyMain() {
    mainImg.src = gallery[sel].img; mainImg.alt = m.title + ' — ' + gallery[sel].label;
    mainImg.style.transition = 'filter .25s, opacity .25s';
    mainImg.style.filter = mode === 'clay' ? 'grayscale(1) contrast(1.15) brightness(1.1)' : gallery[sel].filter;
  }
  function renderThumbs() {
    thumbs.innerHTML = '';
    gallery.forEach(function (g, i) {
      var on = i === sel;
      var n = P.html('<button class="relative aspect-video rounded-xl overflow-hidden bg-surface-container border transition-all ' + (on ? 'px-ring' : 'border-outline-variant/50 hover:border-primary/60 opacity-80 hover:opacity-100') + '" type="button">' +
        '<img alt="" class="w-full h-full object-cover" src="' + g.img + '" style="filter:' + g.filter + '"/>' +
        '<div class="absolute inset-x-0 bottom-0 bg-surface-container-lowest/90 py-1 px-1 font-code-tech text-[10px] text-center truncate ' + (on ? 'text-primary font-medium' : 'text-on-surface-variant') + '">' + P.esc(g.label) + '</div></button>');
      n.addEventListener('click', function () { sel = i; applyMain(); renderThumbs(); });
      thumbs.appendChild(n);
    });
  }
  renderThumbs(); applyMain();

  var ON = ['bg-primary', 'text-on-primary', 'font-semibold'], OFF = ['text-on-surface-variant', 'hover:text-primary'];
  var modeBtns = [].slice.call(document.querySelectorAll('[data-mode]'));
  function setMode(k) {
    mode = k;
    modeBtns.forEach(function (b) { var on = b.dataset.mode === k; ON.forEach(function (c) { b.classList.toggle(c, on); }); OFF.forEach(function (c) { b.classList.toggle(c, !on); }); });
    wire.classList.toggle('opacity-0', k !== 'wire');
    applyMain();
  }
  modeBtns.forEach(function (b) { b.addEventListener('click', function () { setMode(b.dataset.mode); }); });
  setMode('render');
  $('#btn-full').addEventListener('click', function () {
    var box = $('#viewport');
    if (document.fullscreenElement) document.exitFullscreen(); else if (box.requestFullscreen) box.requestFullscreen();
  });
  $('#btn-share').addEventListener('click', function () {
    try { navigator.clipboard.writeText(location.href); } catch (e) {}
    P.toast('Link copied', 'link');
  });

  /* ----- избранное ----- */
  var wb = $('#btn-wishlist');
  function syncWish() {
    var on = S.isWish(m.id), ic = wb.querySelector('.material-symbols-outlined');
    ic.style.fontVariationSettings = on ? "'FILL' 1" : "'FILL' 0";
    wb.classList.toggle('text-primary', on); wb.classList.toggle('px-ring', on);
    $('#wish-label').textContent = P.t(on ? 'In favorites' : 'Add to favorites');
  }
  wb.addEventListener('click', function () { P.wishToggle(m.id); syncWish(); });
  syncWish();

  /* ----- теги ----- */
  var fmts = m.chips.filter(function (c) { return c.charAt(0) === '.'; });
  var tags = isApex ? D.apexTags : ['#GameReady', '#PBR-4K'].concat(fmts.map(function (c) { return '#' + c.slice(1); }), ['#' + m.cat.charAt(0).toUpperCase() + m.cat.slice(1)]);
  $('#tag-list').innerHTML = tags.map(function (t) { return '<span class="font-code-tech text-[11px] bg-surface-container text-primary border border-outline-variant/50 px-2 py-0.5 rounded-md">' + P.esc(t) + '</span>'; }).join('');

  /* ----- вкладки ----- */
  var tabBtns = [].slice.call(document.querySelectorAll('[data-tab]'));
  var TON = ['bg-primary', 'text-on-primary', 'font-bold', 'shadow-md'], TOFF = ['text-on-surface-variant', 'hover:text-primary', 'font-semibold'];
  function tab(id) {
    tabBtns.forEach(function (b) { var on = b.dataset.tab === id; TON.forEach(function (c) { b.classList.toggle(c, on); }); TOFF.forEach(function (c) { b.classList.toggle(c, !on); }); document.getElementById(b.dataset.tab).classList.toggle('hidden', !on); });
  }
  tabBtns.forEach(function (b) { b.addEventListener('click', function () { tab(b.dataset.tab); }); });
  tab('tab-description');

  /* ----- описание и характеристики (только то, что есть в данных) ----- */
  $('#d-blurb').textContent = m.blurb;
  $('#d-highlights').innerHTML = m.sub.split(' • ').map(function (h) {
    return '<li class="flex items-start gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span><span>' + P.esc(h) + '</span></li>';
  }).join('');
  var ENG = { ue5: 'Unreal Engine 5', blender: 'Blender', unity: 'Unity', print: '3D Printing' };
  var specs = [
    ['Formats', fmts.join(', ') || m.chips.join(', ')],
    ['Polygons', m.tris],
    ['Features', m.extra],
    ['Engines & tools', m.engines.map(function (e) { return P.t(ENG[e] || e); }).join(', ')],
    ['Category', m.catLabel],
    ['Available on', m.links.map(function (l) { return S.platform(l.platform).name; }).join(', ')]
  ];
  $('#spec-grid').innerHTML = specs.map(function (s) {
    return '<div class="bg-surface-container border border-outline-variant/40 p-space-md rounded-xl"><div class="font-code-tech text-label-sm text-primary uppercase tracking-wider mb-1">' + P.esc(s[0]) + '</div><div class="font-headline-sm text-[17px] font-semibold text-on-surface">' + P.esc(s[1]) + '</div></div>';
  }).join('');

  /* ----- похожие модели ----- */
  var sim = S.catalog().filter(function (x) { return x.id !== m.id; })
    .sort(function (a, b) { return (b.cat === m.cat) - (a.cat === m.cat) || (b.date < a.date ? -1 : 1); }).slice(0, 4);
  var simGrid = $('#similar-grid');
  sim.forEach(function (x, i) { simGrid.appendChild(P.modelCard(x, i)); });
  P.bindCards(simGrid);
  document.addEventListener('polyx:change', syncWish);
})();
