/* Карточка товара (?id=...): данные, галерея, режимы вьюпорта, лицензии, вкладки, похожие модели. */
(function () {
  var S = window.PolyxStore, P = window.Polyx, D = window.POLYX_DATA;
  var id = P.param('id') || 'apex-recon-mech-mk2', m = S.byId[id];
  if (!m) { location.replace('404.html'); return; }
  var isApex = m.id === 'apex-recon-mech-mk2';
  var $ = function (s) { return document.querySelector(s); };
  var root = document.querySelector('main');
  document.title = m.title + ' | POLYX.3D';

  var crumb = D.crumb[m.cat] || 'Shader Packs';
  var fmts = m.chips.filter(function (c) { return c.charAt(0) === '.'; });
  var f = { title: m.title, hero: m.hero || m.img, crumbCat: crumb, catHref: D.crumb[m.cat] ? 'marketplace.html?category=' + m.cat : 'marketplace.html' };
  if (!isApex) { f.catTag = m.catLabel.toUpperCase().replace(' / ', ' // '); f.trisUpper = m.tris.toUpperCase(); }
  var lic = 'standard';
  function priceNow() { return S.unitPrice(m, lic); }
  function money() { return '$' + priceNow() + '.00'; }
  function refreshPrice() {
    $('#price-display').textContent = money();
    P.setText($('#btn-buy [data-b=buyText]'), (m.price === 0 ? 'Get Free' : 'Buy Now') + ' · ' + money());
  }
  f.priceStd = '$' + m.price; f.priceExt = '$' + S.unitPrice(m, 'extended');
  f.buyText = 'Buy Now · $' + m.price + '.00';
  P.fill(root, f);
  if (m.price === 0) P.setText($('[data-b=buyText]'), 'Get Free · $0.00');
  $('#price-display').textContent = '$' + m.price + '.00';

  /* ----- галерея ----- */
  var LABELS = ['01. Hero Textured', '02. Wireframe Sub-D', '03. 4K PBR Channels', '04. Control Rig Armature', '05. UE5 In-Engine Lighting'];
  var FILTERS = ['', 'grayscale(1) contrast(1.4) brightness(.9)', 'hue-rotate(40deg) saturate(1.4)', 'grayscale(1) sepia(.4) hue-rotate(120deg) contrast(1.2) brightness(.85)', 'brightness(1.15) saturate(1.25)'];
  var gallery = LABELS.map(function (l, i) {
    return isApex ? { img: D.apexGallery[i].img, label: l, filter: '' } : { img: i === 0 ? (m.hero || m.img) : m.img, label: l, filter: FILTERS[i] };
  });
  var sel = 0, mode = 'orbit';
  var mainImg = $('#main-viewport-image'), wire = $('#wireframe-mesh');
  var thumbs = $('#thumbs');
  function applyMain() {
    mainImg.src = gallery[sel].img;
    mainImg.style.transition = 'filter .25s, opacity .25s';
    mainImg.style.filter = mode === 'matcap' ? 'grayscale(1) contrast(1.15) brightness(1.1)' : gallery[sel].filter;
  }
  function renderThumbs() {
    thumbs.innerHTML = '';
    gallery.forEach(function (g, i) {
      var n = P.clone(i === sel ? 'tpl-thumb-active' : 'tpl-thumb');
      P.fill(n, { img: g.img, label: g.label });
      n.querySelector('img').style.filter = g.filter;
      n.addEventListener('click', function () { sel = i; applyMain(); renderThumbs(); });
      thumbs.appendChild(n);
    });
  }
  renderThumbs(); applyMain();

  /* ----- режимы вьюпорта ----- */
  var MODE_ON = ['bg-[#2dd4a7]', 'text-[#002117]', 'font-semibold'], MODE_OFF = ['text-on-surface-variant', 'hover:bg-[#1f2628]'];
  var modeBtns = { orbit: $('#btn-mode-orbit'), wire: $('#btn-mode-wire'), matcap: $('#btn-mode-matcap'), uv: $('#btn-mode-uv') };
  function setMode(k) {
    mode = k;
    Object.keys(modeBtns).forEach(function (key) {
      var b = modeBtns[key], on = key === k;
      MODE_ON.forEach(function (c) { b.classList.toggle(c, on); }); MODE_OFF.forEach(function (c) { b.classList.toggle(c, !on); });
    });
    wire.classList.toggle('opacity-0', !(k === 'wire' || k === 'uv'));
    applyMain();
  }
  Object.keys(modeBtns).forEach(function (k) { modeBtns[k].addEventListener('click', function () { setMode(k); }); });
  var fs = document.querySelector('[aria-label="Toggle Fullscreen"]');
  if (fs) fs.addEventListener('click', function () {
    var box = mainImg.closest('div.relative') || mainImg.parentElement;
    if (document.fullscreenElement) document.exitFullscreen(); else if (box.requestFullscreen) box.requestFullscreen();
  });
  var share = document.querySelector('[aria-label="Share"]');
  if (share) share.addEventListener('click', function () {
    try { navigator.clipboard.writeText(location.href); } catch (e) {}
    P.toast('Link copied', 'link');
  });

  /* ----- лицензии ----- */
  var LIC_ON = ['border-[#2dd4a7]', 'ring-1', 'ring-[#2dd4a7]/60'];
  document.querySelectorAll('input[name="license-type"]').forEach(function (inp) {
    inp.addEventListener('change', function () {
      lic = inp.dataset.license;
      document.querySelectorAll('.license-option').forEach(function (o) {
        var on = o.contains(inp);
        LIC_ON.forEach(function (c) { o.classList.toggle(c, on); }); o.classList.toggle('border-[#293630]', !on);
      });
      refreshPrice();
    });
  });
  $('#btn-buy').addEventListener('click', function () { S.addToCart(m.id, lic); location.href = 'cart.html'; });

  /* ----- избранное ----- */
  var wb = $('#btn-wishlist'), wcount = isApex ? 142 : Math.round(m.dl / 25);
  function syncWish() {
    var on = S.isWish(m.id), ic = wb.querySelector('.material-symbols-outlined');
    ic.style.fontVariationSettings = on ? "'FILL' 1" : "'FILL' 0";
    wb.classList.toggle('text-[#2dd4a7]', on); wb.classList.toggle('border-[#2dd4a7]/50', on);
    P.setText(wb.querySelector('span:last-child'), on ? 'Favorited (' + (wcount + 1) + ')' : 'Add to favorites');
  }
  wb.addEventListener('click', function () { P.wishToggle(m.id); syncWish(); });
  syncWish();


  /* ----- рейтинг: средняя оценка и своя оценка (звёзды) ----- */
  var avgBox = $('#rating-avg-stars'), starBtns = [].slice.call(document.querySelectorAll('#rate-stars [data-star]')), hover = 0;
  function star(kind) { return '<span class="material-symbols-outlined text-[18px] block' + (kind === 'empty' ? ' text-outline' : ' fill') + '">' + (kind === 'half' ? 'star_half' : 'star') + '</span>'; }
  function syncRating() {
    var r = S.ratingOf(m), html = '';
    for (var i = 1; i <= 5; i++) html += star(r.avg >= i - 0.25 ? 'full' : (r.avg >= i - 0.75 ? 'half' : 'empty'));
    avgBox.innerHTML = html;
    $('#rating-avg').textContent = r.avg.toFixed(1);
    $('#rating-count').textContent = '(' + r.count + ' review' + (r.count === 1 ? '' : 's') + ')';
    var shown = hover || r.user;
    starBtns.forEach(function (b, i) {
      var on = i < shown, ic = b.querySelector('.material-symbols-outlined');
      ic.classList.toggle('fill', on); b.classList.toggle('text-primary', on); b.classList.toggle('text-outline', !on);
    });
    $('#rate-label').textContent = hover ? hover + ' / 5' : (r.user ? 'Your rating: ' + r.user + ' / 5' : 'Rate this model');
  }
  starBtns.forEach(function (b, i) {
    b.addEventListener('mouseenter', function () { hover = i + 1; syncRating(); });
    b.addEventListener('mouseleave', function () { hover = 0; syncRating(); });
    b.addEventListener('click', function () {
      var n = i + 1, same = S.userRating(m.id) === n;
      S.setRating(m.id, same ? 0 : n); hover = 0;
      P.toast(same ? 'Your rating was removed' : 'Thanks! You rated it ' + n + ' / 5', same ? 'info' : 'star');
    });
  });
  syncRating();

  /* ----- теги ----- */
  var tagBox = $('[data-list-tags]');
  var tags = isApex ? D.apexTags : ['#GameReady', '#PBR-4K'].concat(fmts.map(function (c) { return '#' + c.slice(1); }), ['#' + m.cat.charAt(0).toUpperCase() + m.cat.slice(1)]);
  tags.forEach(function (t) { var n = P.clone('tpl-tag'); n.textContent = t; tagBox.appendChild(n); });

  /* ----- вкладки ----- */
  var bd = $('#btn-tab-description'), bs = $('#btn-tab-specs'), pd = $('#tab-description'), ps = $('#tab-specs');
  var TON = ['bg-[#2dd4a7]', 'text-[#002117]', 'font-bold', 'shadow-md'], TOFF = ['text-on-surface-variant', 'hover:bg-[#1a2022]'];
  function tab(isDesc) {
    [[bd, isDesc], [bs, !isDesc]].forEach(function (p) {
      TON.forEach(function (c) { p[0].classList.toggle(c, p[1]); }); TOFF.forEach(function (c) { p[0].classList.toggle(c, !p[1]); });
    });
    pd.classList.toggle('hidden', !isDesc); ps.classList.toggle('hidden', isDesc);
  }
  bd.addEventListener('click', function () { tab(true); }); bs.addEventListener('click', function () { tab(false); });
  tab(true);

  /* ----- описание (для остальных моделей — по шаблону) ----- */
  var GEN = {
    mechs: { l2: 'Built for real-time hard-surface pipelines: clean quad loops around every joint keep deformation free of pinching, vertex distortion and normal shading artifacts in motion.',
      ready: [['LOD Hierarchy:', 'LOD0 down to LOD3 with auto-switching imposters.'], ['Master Material Instances:', 'Tweakable color masks, wear sliders and dirt modulation.'], ['Control Rig IK/FK:', 'Switchable inverse and forward kinematics, ready for retargeting.']],
      fin: [['Tactical Obsidian:', 'Default matte charcoal finish with teal emissive lenses.'], ['Arctic Camouflage:', 'Weathered white polymer coat with subtle wear decals.'], ['Industrial Hazard:', 'High-visibility yellow with stenciled hazard stripes.']] },
    weapons: { l2: 'Clean high-to-low bakes and non-overlapping UVs make this asset equally comfortable in a first-person camera and in close-up cinematics.',
      ready: [['Baked Maps:', 'Normal, AO, curvature and ID maps included.'], ['Master Material:', 'Color masks and emissive intensity exposed.'], ['Animation Ready:', 'Separated moving parts with correct pivots.']],
      fin: [['Gunmetal:', 'Default brushed steel with worn edges.'], ['Desert Tan:', 'Sand-coated polymer with chipped paint.'], ['Neon Core:', 'Teal emissive accents for sci-fi lighting.']] },
    characters: { l2: 'Topology follows the underlying forms with extra loops at deformation hubs, so the piece skins cleanly and holds its silhouette at every LOD.',
      ready: [['Rig Included:', 'Weighted skeleton with custom bone shapes.'], ['Texture Sets:', '4K PBR sets with DirectX and OpenGL normals.'], ['Print Check:', 'Manifold shells verified for 3D printing where STL is included.']],
      fin: [['Stealth Matte:', 'Non-reflective charcoal armor finish.'], ['Field Camo:', 'Three-tone woodland camouflage.'], ['Command White:', 'Clean ceramic white with accent trim.']] },
    vehicles: { l2: 'Interior and exterior are modeled to the same standard, with modular hull segments and clean mesh flow that survives Nanite and traditional LOD workflows.',
      ready: [['Modular Hull:', 'Detachable panels for damage states.'], ['Interior Included:', 'Cockpit and cargo bay with baked lighting masks.'], ['UE5 Project:', 'Preconfigured materials and blueprints.']],
      fin: [['Cargo Grey:', 'Default industrial grey livery.'], ['Frontier Orange:', 'High-visibility orange with hazard markings.'], ['Black Ops:', 'Dark stealth finish with muted decals.']] },
    environments: { l2: 'Every piece snaps to a clean grid, shares trim sheets and carries vertex-paint masks, so you can block out a level in minutes and dress it without extra cleanup.',
      ready: [['Grid Snapped:', 'Consistent pivots and unit-scale pieces.'], ['Trim Sheets:', 'Shared 4K trim for fast material changes.'], ['Lighting Ready:', 'Lumen-friendly emissives and lightmap UVs.']],
      fin: [['Clean Facility:', 'Bright sterile panels and soft glow strips.'], ['Abandoned:', 'Dirt, rust and flickering emissives.'], ['Alert State:', 'Red emissive warning lighting.']] },
    props: { l2: 'Snap-together modules with vertex-paint dirt masks and shared materials keep draw calls low while giving you plenty of variation to dress a scene.',
      ready: [['Modular Pieces:', 'Pre-aligned connectors and sockets.'], ['Vertex Paint:', 'Dirt and wear masks driven by vertex color.'], ['Nanite Ready:', 'Clean topology for virtualized geometry.']],
      fin: [['Industrial Grey:', 'Default painted steel.'], ['Safety Yellow:', 'Caution yellow with scuffs.'], ['Worn Copper:', 'Oxidized copper accents.']] },
    shaders: { l2: 'Fully parameterized materials and functions with clear naming, so artists can tune every layer without opening a single node graph.',
      ready: [['Material Instances:', 'Color, intensity and distortion exposed.'], ['Engine Support:', 'Unreal 5.3+ and Unity HLSL ports.'], ['Demo Level:', 'Sample scene showing every variant.']],
      fin: [['Cyan Scan:', 'Default teal hologram scanlines.'], ['Amber Alert:', 'Warm amber variant with stronger flicker.'], ['Ghost White:', 'Subtle white projection for UI.']] }
  };
  function liFill(ul, items) {
    var tpl = document.getElementById('tpl-li').content.firstElementChild, cls = tpl.querySelector('strong') ? tpl.querySelector('strong').className : '';
    ul.innerHTML = '';
    items.forEach(function (it) {
      var li = tpl.cloneNode(true), spans = li.querySelectorAll(':scope > span');
      spans[spans.length - 1].innerHTML = '<strong' + (cls ? ' class="' + cls + '"' : '') + '>' + P.esc(it[0]) + '</strong> ' + P.esc(it[1]);
      ul.appendChild(li);
    });
  }
  if (!isApex) {
    var g = GEN[m.cat] || GEN.props, sc = pd.querySelector('p strong'), scls = sc ? sc.className : '';
    var ps0 = pd.querySelectorAll('p');
    ps0[0].innerHTML = 'The <strong class="' + scls + '">' + P.esc(m.title) + '</strong> — ' + P.esc(m.blurb.charAt(0).toLowerCase() + m.blurb.slice(1)) + ' ' + P.esc(m.sub) + '.';
    ps0[1].textContent = g.l2;
    liFill(pd.querySelector('[data-list-ready]'), g.ready); liFill(pd.querySelector('[data-list-finishes]'), g.fin);
  }

  /* ----- спецификации ----- */
  var specs = isApex ? [
    ['Formats', '.BLEND, .FBX, .OBJ, .UASSET', 'Blender 4.2+, FBX 2020+, OBJ, UE 5.3–5.4'], ['Polygons', '42,850 Tris', '23,410 Clean Quads · 0 N-Gons'],
    ['File Size', '1.4 GB Archive', 'Compressed .ZIP with source files & textures'], ['Textures', '3x 4096×4096 PBR', 'DirectX & OpenGL Normals, BaseColor, Roughness, Metallic, AO, Emissive'],
    ['Rigging & Bones', '48 Deform Bones', 'Hydraulic piston constraints & IK/FK pole targets'], ['UV Unwrapping', '82% Packing Density', 'Clean non-overlapping UV islands across 3 UDIM sets']
  ] : [
    ['Formats', fmts.join(', ') || 'HLSL, .UASSET', 'Blender 4.2+, FBX 2020+, UE 5.3–5.4'], ['Polygons', m.tris, m.extra + ' · 0 N-Gons'],
    ['File Size', (m.size || '1.1 GB') + ' Archive', 'Compressed .ZIP with source files & textures'], ['Textures', '2x 4096×4096 PBR', 'DirectX & OpenGL Normals, BaseColor, Roughness, Metallic, AO'],
    ['Rigging & Bones', m.cat === 'props' || m.cat === 'environments' ? 'Static Meshes' : 'Rig Included', 'Clean pivots, correct scale and named bones'], ['UV Unwrapping', '80% Packing Density', 'Non-overlapping UV islands, texel density matched']
  ];
  var sg = $('#spec-grid');
  specs.forEach(function (s) { var n = P.clone('tpl-spec'); P.fill(n, { label: s[0], value: s[1], note: s[2] }); sg.appendChild(n); });

  /* ----- похожие модели ----- */
  var ids = isApex ? ['tactical-exosuit-helmet', 'heavy-industrial-walker', 'combat-drone-x1', 'armature-prosthetic'] :
    S.catalog().filter(function (x) { return x.id !== m.id; }).sort(function (a, b) { return (b.cat === m.cat) - (a.cat === m.cat) || b.dl - a.dl; }).slice(0, 4).map(function (x) { return x.id; });
  var simGrid = $('#similar-grid');
  function syncSimilar(n, x) {
    P.wishIconState(n.querySelector('[data-action=wish]'), x.id);
    var ic = n.querySelector('[data-action=add]'); ic.querySelector('.material-symbols-outlined').textContent = S.inCart(x.id) ? 'check' : 'shopping_cart';
    P.setText(ic.lastElementChild, S.inCart(x.id) ? 'In Cart' : 'Add');
  }
  ids.forEach(function (sid, i) {
    var x = S.byId[sid], n = P.clone('tpl-similar');
    n.dataset.id = x.id; n.classList.add('polyx-in'); n.style.animationDelay = (i * 60) + 'ms';
    P.fill(n, { img: x.img, title: x.title, chipsText: x.chips.filter(function (c) { return c.charAt(0) === '.'; }).join(' · ') || x.chips[0], tris: x.tris, blurb: x.blurb, price2: x.price === 0 ? 'FREE' : '$' + x.price + '.00' });
    syncSimilar(n, x); simGrid.appendChild(n);
  });
  simGrid.addEventListener('click', function (e) {
    var art = e.target.closest('article'); if (!art) return;
    var act = e.target.closest('[data-action]'), sid = art.dataset.id;
    if (act && act.dataset.action === 'wish') { P.wishToggle(sid); syncSimilar(art, S.byId[sid]); return; }
    if (act && act.dataset.action === 'add') { if (S.inCart(sid)) { location.href = 'cart.html'; return; } P.add(sid); syncSimilar(art, S.byId[sid]); return; }
    location.href = P.productUrl(sid);
  });
  document.addEventListener('polyx:change', function () { syncWish(); syncRating(); simGrid.querySelectorAll('article').forEach(function (a) { syncSimilar(a, S.byId[a.dataset.id]); }); });
})();
