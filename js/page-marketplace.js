/* Каталог: поиск, фильтры, сортировка, вид (сетка/список), пагинация, избранное, корзина. */
(function () {
  var S = window.PolyxStore, P = window.Polyx;
  var PAGE_SIZE = 6;
  var cont = document.getElementById('assets-container');
  var empty = document.getElementById('empty-state');
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return [].slice.call(document.querySelectorAll(s)); };

  function defaults() { return { q: '', pricing: 'all', max: 150, cat: 'all', formats: ['.FBX', '.OBJ', '.STL', '.BLEND'], engines: ['ue5'], sort: 'popular', view: 'grid', page: 1 }; }
  var st = defaults();
  (function fromUrl() {
    var q = P.param('q'), c = P.param('category'), pr = P.param('pricing'), so = P.param('sort');
    if (q) st.q = q; if (c) st.cat = c; if (pr) st.pricing = pr; if (so) st.sort = so;
  })();

  function filtered() {
    return S.catalog().filter(function (m) {
      if (st.q && (m.title + ' ' + m.catLabel + ' ' + m.sub + ' ' + m.chips.join(' ')).toLowerCase().indexOf(st.q.toLowerCase()) < 0) return false;
      if (st.pricing === 'free' && m.price > 0) return false;
      if (st.pricing === 'paid' && m.price === 0) return false;
      if (st.max < 150 && m.price > st.max) return false;
      if (st.cat !== 'all' && m.cat !== st.cat) return false;
      var fm = m.chips.filter(function (c) { return c.charAt(0) === '.'; });
      if (fm.length && !fm.some(function (f) { return st.formats.indexOf(f) > -1; })) return false;
      for (var i = 0; i < st.engines.length; i++) if (m.engines.indexOf(st.engines[i]) < 0) return false;
      return true;
    }).sort(function (a, b) {
      if (st.sort === 'newest') return b.date < a.date ? -1 : 1;
      if (st.sort === 'price-asc') return a.price - b.price;
      if (st.sort === 'price-desc') return b.price - a.price;
      return b.dl - a.dl;
    });
  }

  function syncAdd(n, m) {
    var b = n.querySelector('[data-action=add]'), inCart = S.inCart(m.id);
    b.querySelector('[data-add-icon]').textContent = inCart ? 'check' : (m.price === 0 ? 'download' : 'shopping_cart');
    P.setText(b, inCart ? 'In Cart' : (m.price === 0 ? 'Get Free' : 'Add'));
  }
  function card(m, i) {
    var n = P.clone('tpl-card');
    n.dataset.id = m.id; n.classList.add('polyx-in'); n.style.animationDelay = (i * 45) + 'ms';
    P.fill(n, { img: m.img, title: m.title, tris: m.tris, extra: m.extra, catLabel: m.catLabel, rating: S.ratingOf(m).avg.toFixed(1), reviews: '(' + S.ratingOf(m).count + ')',
      sub: m.sub, priceLabel: m.priceLabel || 'Standard', price: S.priceText(m) });
    P.chips(n.querySelector('[data-chips]'), m.chips);
    P.wishIconState(n.querySelector('[data-action=wish]'), m.id);
    syncAdd(n, m);
    return n;
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

  var ACT = 'font-semibold bg-primary text-on-primary shadow-sm', IDLE = 'text-on-surface-variant hover:text-on-surface';
  function syncControls() {
    $$('[data-pricing]').forEach(function (b) {
      var on = b.dataset.pricing === st.pricing;
      ACT.split(' ').forEach(function (c) { b.classList.toggle(c, on); });
      IDLE.split(' ').forEach(function (c) { b.classList.toggle(c, !on); });
    });
    $('#price-display').textContent = st.max >= 150 ? '$0 — $150+' : '$0 — $' + st.max;
    $('#price-slider').value = st.max;
    $$('input[name=category]').forEach(function (r) {
      var on = r.value === st.cat; r.checked = on;
      var lab = r.closest('label'), name = lab.querySelector('span'), cnt = lab.lastElementChild;
      lab.classList.toggle('bg-surface-container', on);
      name.classList.toggle('text-on-surface', on); name.classList.toggle('text-on-surface-variant', !on);
      name.classList.toggle('group-hover:text-primary', on); name.classList.toggle('group-hover:text-on-surface', !on);
      cnt.classList.toggle('text-primary', on); cnt.classList.toggle('bg-surface-container-highest', on);
      cnt.classList.toggle('text-outline', !on); cnt.classList.toggle('bg-surface-container-lowest', !on);
    });
    $$('[data-format]').forEach(function (i) { i.checked = st.formats.indexOf(i.dataset.format) > -1; });
    $$('[data-engine]').forEach(function (b) {
      var on = st.engines.indexOf(b.dataset.engine) > -1;
      b.classList.toggle('bg-primary/10', on); b.classList.toggle('text-primary', on);
      b.classList.toggle('bg-surface-container', !on); b.classList.toggle('text-on-surface-variant', !on); b.classList.toggle('hover:text-on-surface', !on);
    });
    var g = $('#view-grid-btn'), c = $('#view-compact-btn'), isGrid = st.view === 'grid';
    [[g, isGrid], [c, !isGrid]].forEach(function (p) {
      p[0].classList.toggle('bg-primary', p[1]); p[0].classList.toggle('text-on-primary', p[1]);
      p[0].classList.toggle('text-on-surface-variant', !p[1]); p[0].classList.toggle('hover:text-on-surface', !p[1]);
    });
    $('#sort-select').value = st.sort;
    $('#marketplace-main-search').value = st.q;
  }

  function render(resetPage) {
    if (resetPage) st.page = 1;
    var list = filtered(), total = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
    if (st.page > total) st.page = total;
    $('#results-count').textContent = list.length;
    cont.querySelectorAll('article').forEach(function (a) { a.remove(); });
    var slice = list.slice((st.page - 1) * PAGE_SIZE, st.page * PAGE_SIZE);
    slice.forEach(function (m, i) { cont.insertBefore(card(m, i), empty); });
    empty.classList.toggle('hidden', list.length > 0);
    var compact = st.view === 'compact';
    cont.className = compact ? 'grid grid-cols-1 gap-space-sm' : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter';
    cont.querySelectorAll('article').forEach(function (a) {
      a.classList.toggle('md:flex-row', compact);
      var im = a.firstElementChild;
      ['md:w-72', 'md:shrink-0', 'md:aspect-auto', 'md:min-h-[160px]'].forEach(function (c) { im.classList.toggle(c, compact); });
    });
    pageNumbers(list.length ? total : 1);
    syncControls();
    var u = new URLSearchParams();
    if (st.q) u.set('q', st.q); if (st.cat !== 'all') u.set('category', st.cat); if (st.pricing !== 'all') u.set('pricing', st.pricing); if (st.sort !== 'popular') u.set('sort', st.sort);
    history.replaceState(null, '', location.pathname + (u.toString() ? '?' + u : ''));
  }

  // события
  $('#marketplace-main-search').addEventListener('input', function (e) { st.q = e.target.value.trim(); render(true); });
  $('#sort-select').addEventListener('change', function (e) { st.sort = e.target.value; render(true); });
  $$('[data-pricing]').forEach(function (b) { b.addEventListener('click', function () { st.pricing = b.dataset.pricing; render(true); }); });
  $('#price-slider').addEventListener('input', function (e) { st.max = +e.target.value; render(true); });
  $$('input[name=category]').forEach(function (r) { r.addEventListener('change', function () { st.cat = r.value; render(true); }); });
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
  $('#view-grid-btn').addEventListener('click', function () { st.view = 'grid'; render(); });
  $('#view-compact-btn').addEventListener('click', function () { st.view = 'compact'; render(); });
  function reset() { var d = defaults(); st = d; render(true); }
  $('#reset-filters').addEventListener('click', reset);
  $('#empty-reset').addEventListener('click', reset);
  $('#pagination').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.dataset.page) st.page = +b.dataset.page;
    else if (b.dataset.pageNav === 'prev') st.page--; else if (b.dataset.pageNav === 'next') st.page++;
    render();
    window.scrollTo({ top: cont.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' });
  });
  cont.addEventListener('click', function (e) {
    var art = e.target.closest('article'); if (!art) return;
    var id = art.dataset.id, act = e.target.closest('[data-action]');
    if (act && act.dataset.action === 'wish') { P.wishToggle(id); P.wishIconState(act, id); return; }
    if (act && act.dataset.action === 'add') {
      if (S.inCart(id)) { location.href = 'cart.html'; return; }
      P.add(id); syncAdd(art, S.byId[id]); return;
    }
    location.href = P.productUrl(id);
  });
  document.addEventListener('polyx:change', function () {
    cont.querySelectorAll('article').forEach(function (a) {
      var m = S.byId[a.dataset.id]; if (!m) return;
      syncAdd(a, m); P.wishIconState(a.querySelector('[data-action=wish]'), m.id);
    });
  });
  render(false);
})();
