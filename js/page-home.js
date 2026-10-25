/* Главная: цифры, избранные работы (фильтр-чипы), модели с площадок, посты блога. */
(function () {
  var S = window.PolyxStore, P = window.Polyx, D = window.POLYX_DATA;
  var $ = function (s) { return document.getElementById(s); };
  var CHIP_ON = 'bg-primary text-on-primary font-label-sm text-label-sm px-3.5 py-1.5 rounded-full font-medium transition-all shadow-sm';
  var CHIP_OFF = 'bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm px-3.5 py-1.5 rounded-full transition-all';

  // цифры считаются из данных
  $('stat-works').textContent = D.works.length;
  $('stat-models').textContent = S.catalog().length;
  $('stat-platforms').textContent = D.platforms.length;

  // каркас вьюпорта
  var wf = $('hero-wireframe-overlay'), wb = $('hero-wire-btn');
  wb.addEventListener('click', function () {
    var on = wf.classList.toggle('opacity-0');
    wf.classList.toggle('opacity-90', !on);
    wb.classList.toggle('bg-primary', !on); wb.classList.toggle('text-on-primary', !on);
  });

  // избранные работы
  var grid = $('works-grid'), filters = $('work-filters');
  var FIL = [['all', 'All Works']].concat(['mechs', 'vehicles', 'environments', 'props'].map(function (k) { return [k, D.workCats[k]]; }));
  filters.innerHTML = FIL.map(function (f) { return '<button data-filter="' + f[0] + '" type="button">' + P.esc(f[1]) + '</button>'; }).join('');
  function list(k) {
    if (k === 'all') return D.works.filter(function (w) { return w.featured; }).slice(0, 4);
    return D.works.filter(function (w) { return w.cat === k; }).slice(0, 4);
  }
  function workCard(w, i) {
    return P.html('<a class="polyx-in group bg-surface-container-low border border-outline-variant/40 hover:border-primary rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1" href="portfolio.html?work=' + w.id + '" style="animation-delay:' + (i * 60) + 'ms">' +
      '<div class="relative aspect-[4/3] w-full bg-surface-container-lowest overflow-hidden"><img alt="' + P.esc(w.title) + '" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" src="' + w.img + '"/>' +
      '<span class="absolute top-2.5 left-2.5 bg-surface-container-lowest/80 backdrop-blur text-on-surface font-code-tech text-[10px] uppercase px-2 py-0.5 rounded">' + P.esc(w.tag) + '</span></div>' +
      '<div class="p-space-md"><div class="font-code-tech text-[11px] text-on-surface-variant mb-1">' + w.year + ' • ' + P.esc(w.tris) + '</div>' +
      '<h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">' + P.esc(w.title) + '</h3>' +
      '<p class="font-body-sm text-body-sm text-on-surface-variant/80 mt-1 line-clamp-1">' + P.esc(w.stack) + '</p></div></a>');
  }
  function renderWorks(k) {
    grid.innerHTML = '';
    list(k).forEach(function (w, i) { grid.appendChild(workCard(w, i)); });
    [].forEach.call(filters.children, function (b) { b.className = b.dataset.filter === k ? CHIP_ON : CHIP_OFF; });
  }
  filters.addEventListener('click', function (e) { var b = e.target.closest('[data-filter]'); if (b) renderWorks(b.dataset.filter); });
  renderWorks('all');

  // модели с площадок
  var mg = $('models-grid');
  ['apex-recon-mech-mk2', 'industrial-generator-pack', 'tactical-exosuit-helmet', 'surveillance-drone-scout'].forEach(function (id, i) { mg.appendChild(P.modelCard(S.byId[id], i)); });
  P.bindCards(mg);

  // блог
  var bg = $('blog-grid');
  D.posts.slice(0, 3).forEach(function (p) {
    bg.appendChild(P.html('<a class="bg-surface-container-low border border-outline-variant/30 hover:border-outline-variant/80 rounded-xl overflow-hidden flex flex-col group transition-all" href="' + P.postUrl(p.id) + '">' +
      '<div class="aspect-[16/10] w-full bg-surface-container-lowest overflow-hidden relative"><img alt="' + P.esc(p.title) + '" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" src="' + p.img + '"/>' +
      '<span class="absolute bottom-2.5 left-2.5 bg-surface-container-lowest/90 text-primary font-code-tech text-[10px] px-2 py-0.5 rounded border border-outline-variant/40">' + P.esc(p.tag) + '</span></div>' +
      '<div class="p-space-md flex-1 flex flex-col justify-between"><div><div class="flex items-center gap-2 text-on-surface-variant font-code-tech text-[11px] mb-2"><span>' + P.date(p.date) + '</span><span>•</span><span>' + P.esc(P.t('{n} min read', { n: p.read })) + '</span></div>' +
      '<h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">' + P.esc(p.title) + '</h3>' +
      '<p class="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-2">' + P.esc(p.excerpt) + '</p></div>' +
      '<div class="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center text-primary font-label-sm text-label-sm gap-1"><span>Read article</span><span class="material-symbols-outlined text-[14px]">arrow_forward</span></div></div></a>'));
  });
})();
