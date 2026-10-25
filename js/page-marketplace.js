/* Каталог-витрина: поиск, фильтры, сортировка, пагинация, избранное. Покупки нет — у каждой модели кнопки площадок. */
(function () {
  var S = window.PolyxStore, P = window.Polyx, D = window.POLYX_DATA;
  var PAGE_SIZE = 9;
  var cont = document.getElementById('assets-container');
  var empty = document.getElementById('empty-state');
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return [].slice.call(document.querySelectorAll(s)); };
  var ALL_FORMATS = ['.FBX', '.OBJ', '.STL', '.BLEND'];

  function defaults() { return { q: '', access: 'all', cat: 'all', platform: '', formats: ALL_FORMATS.slice(), engines: [], sort: 'newest', page: 1 }; }
  var st = defaults();
  (function fromUrl() {
    var q = P.param('q'), c = P.param('category'), pl = P.param('platform'), so = P.param('sort');
    if (q) st.q = q; if (c) st.cat = c; if (pl) st.platform = pl; if (so) st.sort = so;
    if (P.param('free') === '1') st.access = 'free';
  })();

  /* все магазины — ссылка «на всё сразу» */
  $('#stores-all').innerHTML = D.platforms.map(function (pl) {
    return '<a class="px-store px-store-lg" href="' + P.esc(pl.url) + '" target="_blank" rel="noopener noreferrer"><span class="flex items-center gap-1.5"><span class="material-symbols-outlined">' + pl.icon + '</span>' + P.esc(pl.name) + '</span><span class="material-symbols-outlined">open_in_new</span></a>';
  }).join('');

  /* категории и площадки строятся из данных, счётчики считаются сами */
  var cats = [];
  S.catalog().forEach(function (m) { if (cats.indexOf(m.cat) < 0) cats.push(m.cat); });
  function count(fn) { return S.catalog().filter(fn).length; }
  $('#cat-list').innerHTML = [['all', 'All Categories']].concat(cats.map(function (c) { return [c, P.catName(c)]; })).map(function (c) {
    var n = c[0] === 'all' ? S.catalog().length : count(function (m) { return m.cat === c[0]; });
    return '<label class="flex items-center justify-between p-2 rounded-lg cursor-pointer group hover:bg-surface-container-high transition-colors"><div class="flex items-center gap-2.5"><input class="accent-primary w-4 h-4 cursor-pointer" name="category" type="radio" value="' + c[0] + '"/><span class="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">' + P.esc(c[1]) + '</span></div><span class="font-code-tech text-label-sm text-outline px-1.5 py-0.5 rounded bg-surface-container-lowest">' + n + '</span></label>';
  }).join('');
  $('#platform-pills').innerHTML = D.platforms.map(function (pl) {
    return '<button class="px-2.5 py-1 rounded-full font-code-tech text-label-sm bg-surface-container text-on-surface-variant hover:text-on-surface transition-all" data-platform="' + pl.id + '" type="button">' + P.esc(pl.name) + '</button>';
  }).join('');

  function filtered() {
    var q = st.q.toLowerCase();
    return S.catalog().filter(function (m) {
      if (q && (m.title + ' ' + m.catLabel + ' ' + m.sub + ' ' + m.chips.join(' ')).toLowerCase().indexOf(q) < 0) return false;
      if (st.access === 'free' && !m.free) return false;
      if (st.cat !== 'all' && m.cat !== st.cat) return false;
      if (st.platform && !m.links.some(function (l) { return l.platform === st.platform; })) return false;
      var fm = m.chips.filter(function (c) { return c.charAt(0) === '.'; });
      if (fm.length && !fm.some(function (f) { return st.formats.indexOf(f) > -1; })) return false;
      for (var i = 0; i < st.engines.length; i++) if (m.engines.indexOf(st.engines[i]) < 0) return false;
      return true;
    }).sort(function (a, b) {
      if (st.sort === 'oldest') return a.date < b.date ? -1 : 1;
      if (st.sort === 'name') return a.title.localeCompare(b.title);
      return b.date < a.date ? -1 : 1;
    });
  }

  function pageNumbers(total) {
    var box = $('#page-numbers'), out = [];
    for (var p = 1; p <= total; p++) out.push(p);
    box.innerHTML = out.map(function (p) {
      return '<button type="button" data-page="' + p + '" class="' + (p === st.page ? box.dataset.active : box.dataset.idle) + '">' + p + '</button>';
    }).join('');
    var prev = $('[data-page-nav=prev]'), next = $('[data-page-nav=next]');
    prev.classList.toggle('opacity-40', st.page <= 1); prev.classList.toggle('pointer-events-none', st.page <= 1);
    next.classList.toggle('opacity-40', st.page >= total); next.classList.toggle('pointer-events-none', st.page >= total);
    $('#pagination').classList.toggle('hidden', total <= 1);
  }

  var ACT = 'font-semibold bg-primary text-on-primary shadow-sm'.split(' '), IDLE = 'text-on-surface-variant hover:text-on-surface'.split(' ');
  function toggleOn(b, on) {
    ACT.forEach(function (c) { b.classList.toggle(c, on); }); IDLE.forEach(function (c) { b.classList.toggle(c, !on); });
  }
  function syncControls() {
    $$('[data-access]').forEach(function (b) { toggleOn(b, b.dataset.access === st.access); });
    $$('input[name=category]').forEach(function (r) {
      var on = r.value === st.cat; r.checked = on;
      var lab = r.closest('label'), name = lab.querySelector('span'), cnt = lab.lastElementChild;
      lab.classList.toggle('bg-surface-container', on);
      name.classList.toggle('text-on-surface', on); name.classList.toggle('text-on-surface-variant', !on);
      cnt.classList.toggle('text-primary', on); cnt.classList.toggle('text-outline', !on);
    });
    $$('[data-platform]').forEach(function (b) {
      var on = b.dataset.platform === st.platform;
      b.classList.toggle('bg-primary/10', on); b.classList.toggle('text-primary', on);
      b.classList.toggle('bg-surface-container', !on); b.classList.toggle('text-on-surface-variant', !on);
    });
    $$('[data-format]').forEach(function (i) { i.checked = st.formats.indexOf(i.dataset.format) > -1; });
    $$('[data-engine]').forEach(function (b) {
      var on = st.engines.indexOf(b.dataset.engine) > -1;
      b.classList.toggle('bg-primary/10', on); b.classList.toggle('text-primary', on);
      b.classList.toggle('bg-surface-container', !on); b.classList.toggle('text-on-surface-variant', !on);
    });
    $('#sort-select').value = st.sort;
    $('#marketplace-main-search').value = st.q;
  }

  function render(resetPage) {
    if (resetPage) st.page = 1;
    var list = filtered(), total = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
    if (st.page > total) st.page = total;
    $('#results-count').textContent = list.length;
    $('#results-label').textContent = P.lang === 'uk' ? P.plural(list.length, 'модель', 'моделі', 'моделей') : (list.length === 1 ? 'model' : 'models');
    cont.querySelectorAll('article').forEach(function (a) { a.remove(); });
    list.slice((st.page - 1) * PAGE_SIZE, st.page * PAGE_SIZE).forEach(function (m, i) { cont.insertBefore(P.modelCard(m, i), empty); });
    empty.classList.toggle('hidden', list.length > 0);
    pageNumbers(list.length ? total : 1);
    syncControls();
    var u = new URLSearchParams();
    if (st.q) u.set('q', st.q); if (st.cat !== 'all') u.set('category', st.cat); if (st.access === 'free') u.set('free', '1');
    if (st.platform) u.set('platform', st.platform); if (st.sort !== 'newest') u.set('sort', st.sort);
    history.replaceState(null, '', location.pathname + (u.toString() ? '?' + u : ''));
  }

  $('#marketplace-main-search').addEventListener('input', function (e) { st.q = e.target.value.trim(); render(true); });
  $('#sort-select').addEventListener('change', function (e) { st.sort = e.target.value; render(true); });
  $$('[data-access]').forEach(function (b) { b.addEventListener('click', function () { st.access = b.dataset.access; render(true); }); });
  $$('input[name=category]').forEach(function (r) { r.addEventListener('change', function () { st.cat = r.value; render(true); }); });
  $$('[data-platform]').forEach(function (b) { b.addEventListener('click', function () { st.platform = st.platform === b.dataset.platform ? '' : b.dataset.platform; render(true); }); });
  $$('[data-format]').forEach(function (i) {
    i.addEventListener('change', function () {
      st.formats = $$('[data-format]').filter(function (x) { return x.checked; }).map(function (x) { return x.dataset.format; }); render(true);
    });
  });
  $$('[data-engine]').forEach(function (b) {
    b.addEventListener('click', function () {
      var i = st.engines.indexOf(b.dataset.engine);
      if (i > -1) st.engines.splice(i, 1); else st.engines.push(b.dataset.engine); render(true);
    });
  });
  function reset() { st = defaults(); render(true); }
  $('#reset-filters').addEventListener('click', reset);
  $('#empty-reset').addEventListener('click', reset);
  $('#pagination').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.dataset.page) st.page = +b.dataset.page;
    else if (b.dataset.pageNav === 'prev') st.page--; else if (b.dataset.pageNav === 'next') st.page++;
    render();
    window.scrollTo({ top: cont.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' });
  });
  P.bindCards(cont);
  render(false);
})();
