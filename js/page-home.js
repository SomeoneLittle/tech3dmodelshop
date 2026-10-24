/* Главная: избранные модели (фильтр-чипы), посты блога, добавление в корзину. */
(function () {
  var S = window.PolyxStore, P = window.Polyx, D = window.POLYX_DATA;
  var grid = document.getElementById('featured-grid');
  var HOME = ['apex-recon-mech-mk2', 'industrial-generator-pack', 'tactical-exosuit-helmet', 'surveillance-drone-scout'];
  var CHIP_ON = 'bg-primary text-on-primary font-label-sm text-label-sm px-3.5 py-1.5 rounded-full font-medium transition-all shadow-sm';
  var CHIP_OFF = 'bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm px-3.5 py-1.5 rounded-full transition-all';

  function list(filter) {
    if (filter === 'all') return HOME.map(function (id) { return S.byId[id]; });
    return S.catalog().filter(function (m) { return m.cat === filter; }).sort(function (a, b) { return b.dl - a.dl; }).slice(0, 4);
  }
  function syncAdd(n, m) {
    var b = n.querySelector('[data-action=add]'), ic = b.querySelector('.material-symbols-outlined');
    ic.textContent = S.inCart(m.id) ? 'check' : 'add_shopping_cart';
  }
  function card(m, i) {
    var n = P.clone('tpl-featured');
    n.dataset.id = m.id; n.classList.add('cursor-pointer', 'polyx-in'); n.style.animationDelay = (i * 60) + 'ms';
    P.fill(n, { img: m.img, title: m.title, meta: m.tris + ' • ' + m.extra, ratingText: ' ' + m.rating.toFixed(1) + ' (' + m.reviews + ')', blurb: m.blurb, price: S.priceText(m) });
    P.chips(n.querySelector('[data-chips]'), m.chips);
    syncAdd(n, m);
    return n;
  }
  function render(filter) {
    grid.innerHTML = '';
    list(filter).forEach(function (m, i) { grid.appendChild(card(m, i)); });
    document.querySelectorAll('[data-filter]').forEach(function (b) { b.className = b.dataset.filter === filter ? CHIP_ON : CHIP_OFF; });
  }
  grid.addEventListener('click', function (e) {
    var el = e.target.closest('[data-id]'); if (!el) return;
    var id = el.dataset.id, act = e.target.closest('[data-action]');
    if (act && act.dataset.action === 'add') {
      if (S.inCart(id)) { location.href = 'cart.html'; return; }
      P.add(id); syncAdd(el, S.byId[id]); return;
    }
    location.href = P.productUrl(id);
  });
  document.querySelectorAll('[data-filter]').forEach(function (b) { b.addEventListener('click', function () { render(b.dataset.filter); }); });
  document.addEventListener('polyx:change', function () { grid.querySelectorAll('[data-id]').forEach(function (n) { syncAdd(n, S.byId[n.dataset.id]); }); });
  render('all');

  // Блог
  var bg = document.getElementById('blog-grid');
  D.posts.forEach(function (p) {
    var n = P.clone('tpl-blog');
    P.fill(n, { img: p.img, title: p.title, tag: p.tag, date: p.date, read: p.read, excerpt: p.excerpt });
    bg.appendChild(n);
  });
})();
