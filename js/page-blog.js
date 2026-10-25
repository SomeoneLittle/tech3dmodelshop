/* Блог: список статей из data.js, категории (счётчики считаются сами), поиск (клавиша /), сортировка. */
(function () {
  var D = window.POLYX_DATA, P = window.Polyx;
  var $ = function (s) { return document.querySelector(s); };
  var st = { cat: 'all', q: '', sort: 'recent' };
  var ON = ['bg-primary', 'text-on-primary'], OFF = ['bg-surface-container', 'text-on-surface-variant'];
  var grid = $('#posts-grid'), empty = $('#blog-empty'), fbox = $('#category-filters');
  var cats = Object.keys(D.blogCats).filter(function (k) { return D.posts.some(function (p) { return p.cat === k; }); });

  fbox.innerHTML = [['all', 'All Articles', D.posts.length]].concat(cats.map(function (k) { return [k, D.blogCats[k], D.posts.filter(function (p) { return p.cat === k; }).length]; })).map(function (f) {
    return '<button class="px-space-md py-1.5 rounded-full hover:text-primary font-label-md text-label-md transition-all" data-filter="' + f[0] + '" type="button"><span>' + P.esc(f[1]) + '</span> <span class="opacity-70">(' + f[2] + ')</span></button>';
  }).join('');
  var chips = [].slice.call(fbox.children);

  function card(p) {
    return '<a class="group bg-surface-container-low border border-outline-variant/30 hover:border-outline-variant/80 rounded-xl overflow-hidden flex flex-col transition-all" href="' + P.postUrl(p.id) + '">' +
      '<div class="aspect-[16/10] w-full bg-surface-container-lowest overflow-hidden relative"><img alt="' + P.esc(p.title) + '" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" src="' + p.img + '"/>' +
      '<span class="absolute bottom-2.5 left-2.5 bg-surface-container-lowest/90 text-primary font-code-tech text-[10px] px-2 py-0.5 rounded border border-outline-variant/40">' + P.esc(p.tag) + '</span></div>' +
      '<div class="p-space-md flex-1 flex flex-col justify-between"><div>' +
      '<div class="flex items-center gap-2 text-on-surface-variant font-code-tech text-[11px] mb-2"><span>' + P.date(p.date) + '</span><span>•</span><span>' + P.esc(P.t('{n} min read', { n: p.read })) + '</span></div>' +
      '<h2 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">' + P.esc(p.title) + '</h2>' +
      '<p class="font-body-sm text-body-sm text-on-surface-variant mt-2 line-clamp-3">' + P.esc(p.excerpt) + '</p></div>' +
      '<div class="pt-space-md mt-space-md border-t border-outline-variant/20 flex flex-wrap items-center gap-1.5 font-code-tech text-[11px] text-on-surface-variant">' +
      p.tags.map(function (t) { return '<span class="px-2 py-0.5 rounded bg-surface-container-high">' + P.esc(t) + '</span>'; }).join('') + '</div></div></a>';
  }
  function apply() {
    var q = st.q.toLowerCase();
    var list = D.posts.filter(function (p) {
      return (st.cat === 'all' || p.cat === st.cat) && (!q || (p.title + ' ' + p.excerpt + ' ' + p.tags.join(' ') + ' ' + P.t(p.title) + ' ' + P.t(p.excerpt)).toLowerCase().indexOf(q) > -1);
    }).sort(function (a, b) {
      if (st.sort === 'estimated') return a.read - b.read;
      if (st.sort === 'oldest') return a.date < b.date ? -1 : 1;
      return b.date < a.date ? -1 : 1;
    });
    grid.innerHTML = list.map(card).join('');
    grid.classList.toggle('hidden', !list.length);
    empty.classList.toggle('hidden', list.length > 0);
    chips.forEach(function (x) { var on = x.dataset.filter === st.cat; ON.forEach(function (c) { x.classList.toggle(c, on); }); OFF.forEach(function (c) { x.classList.toggle(c, !on); }); });
  }
  fbox.addEventListener('click', function (e) { var b = e.target.closest('[data-filter]'); if (b) { st.cat = b.dataset.filter; apply(); } });
  $('#article-search').addEventListener('input', function (e) { st.q = e.target.value.trim(); apply(); });
  $('#sort-select').addEventListener('change', function (e) { st.sort = e.target.value; apply(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); $('#article-search').focus(); }
  });
  apply();
})();
