/* Портфолио: карточки и фильтры из data.js (счётчики считаются сами), лайтбокс с листанием, ←/→ и Esc, ссылка ?work=id. */
(function () {
  var D = window.POLYX_DATA, P = window.Polyx, S = window.PolyxStore;
  var $ = function (s) { return document.querySelector(s); };
  var works = D.works, current = 'all', idx = 0;
  var grid = $('#artwork-grid'), fbox = $('#filter-container');
  var cats = Object.keys(D.workCats).filter(function (k) { return works.some(function (w) { return w.cat === k; }); });
  $('#stat-works').textContent = works.length; $('#stat-cats').textContent = cats.length;
  var ON = ['bg-primary', 'text-on-primary', 'font-semibold'], OFF = ['bg-surface-container', 'text-on-surface-variant'];

  fbox.innerHTML = [['all', 'All Works', works.length]].concat(cats.map(function (k) { return [k, D.workCats[k], works.filter(function (w) { return w.cat === k; }).length]; })).map(function (f) {
    return '<button class="px-4 py-2 rounded-full transition-all duration-200 hover:text-on-surface flex items-center gap-2" data-filter="' + f[0] + '" type="button"><span>' + P.esc(f[1]) + '</span><span class="font-code-tech text-[10px] opacity-60">' + f[2] + '</span></button>';
  }).join('');

  grid.innerHTML = works.map(function (w, i) {
    return '<div class="artwork-card group relative break-inside-avoid rounded-xl overflow-hidden bg-surface-container shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1" data-i="' + i + '" data-category="' + w.cat + '" style="transition:opacity .2s,transform .2s">' +
      '<div class="relative w-full ' + (w.aspect === 'square' ? 'aspect-square' : 'aspect-[' + w.aspect + ']') + ' overflow-hidden bg-surface-container-lowest"><img alt="' + P.esc(w.title) + '" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" src="' + w.img + '"/>' +
      '<div class="absolute top-3 left-3 flex items-center gap-1.5 bg-surface-container-lowest/80 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm"><span class="w-1.5 h-1.5 rounded-full bg-primary"></span><span class="font-code-tech text-[10px] uppercase text-on-surface tracking-wider font-semibold">' + P.esc(w.tag) + '</span></div></div>' +
      '<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-space-md"><div class="flex flex-col gap-1.5">' +
      '<span class="font-code-tech text-label-sm text-primary tracking-widest uppercase">' + w.year + '</span>' +
      '<h2 class="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug">' + P.esc(w.title) + '</h2>' +
      '<p class="font-code-tech text-code-tech text-on-surface-variant/90 leading-tight">' + P.esc(w.stack) + '</p>' +
      '<div class="pt-2 flex items-center justify-between"><span class="font-code-tech text-[11px] text-on-surface bg-surface-container-high/80 px-2 py-0.5 rounded">' + P.esc(w.tris) + '</span><span class="material-symbols-outlined text-primary text-[20px] bg-primary/10 p-1.5 rounded-full">zoom_in</span></div></div></div></div>';
  }).join('');
  var cards = [].slice.call(grid.children), btns = [].slice.call(fbox.children);

  function filter(k) {
    current = k;
    btns.forEach(function (b) { var on = b.dataset.filter === k; ON.forEach(function (c) { b.classList.toggle(c, on); }); OFF.forEach(function (c) { b.classList.toggle(c, !on); }); });
    cards.forEach(function (c) {
      var show = k === 'all' || c.dataset.category === k;
      if (show) { c.style.display = ''; requestAnimationFrame(function () { c.style.opacity = '1'; c.style.transform = 'translateY(0)'; }); }
      else { c.style.opacity = '0'; c.style.transform = 'translateY(10px)'; setTimeout(function () { if (current !== 'all' && c.dataset.category !== current) c.style.display = 'none'; }, 200); }
    });
  }
  btns.forEach(function (b) { b.addEventListener('click', function () { filter(b.dataset.filter); }); });
  filter('all');

  var modal = $('#art-modal'), box = $('#modal-container');
  function visible() { return works.map(function (w, i) { return i; }).filter(function (i) { return current === 'all' || works[i].cat === current; }); }
  function open(i) {
    idx = i; var w = works[i], ml = $('#modal-model-link');
    $('#modal-title').textContent = w.title; $('#modal-year').textContent = w.year; $('#modal-category').textContent = P.t(D.workCats[w.cat]).toUpperCase();
    $('#modal-stack').textContent = w.stack; $('#modal-desc').textContent = w.desc; $('#modal-tris').textContent = w.tris;
    $('#modal-img').src = w.img; $('#modal-img').alt = w.title;
    if (w.model && S.byId[w.model]) { ml.href = P.productUrl(w.model); ml.classList.remove('hidden'); } else ml.classList.add('hidden');
    modal.classList.remove('opacity-0', 'pointer-events-none'); modal.classList.add('opacity-100');
    modal.setAttribute('aria-hidden', 'false');
    box.classList.remove('scale-95'); box.classList.add('scale-100');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    modal.classList.remove('opacity-100'); modal.classList.add('opacity-0', 'pointer-events-none'); modal.setAttribute('aria-hidden', 'true');
    box.classList.remove('scale-100'); box.classList.add('scale-95'); document.body.style.overflow = '';
  }
  function isOpen() { return !modal.classList.contains('pointer-events-none'); }
  function step(d) { var v = visible(), i = v.indexOf(idx); if (i < 0) i = 0; open(v[(i + d + v.length) % v.length]); }
  cards.forEach(function (c) { c.addEventListener('click', function () { open(+c.dataset.i); }); });
  $('#modal-close-btn').addEventListener('click', close);
  modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
  $('#modal-prev-btn').addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
  $('#modal-next-btn').addEventListener('click', function (e) { e.stopPropagation(); step(1); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
    if (isOpen() && e.key === 'ArrowRight') step(1);
    if (isOpen() && e.key === 'ArrowLeft') step(-1);
  });
  var deep = P.param('work');
  if (deep) { for (var i = 0; i < works.length; i++) if (works[i].id === deep) { open(i); break; } }
})();
