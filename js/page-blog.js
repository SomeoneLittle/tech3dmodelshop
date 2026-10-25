/* Блог: категории, теги, поиск (клавиша /), сортировка, счётчик, пагинация (демо). */
(function () {
  var P = window.Polyx;
  var $ = function (s) { return document.querySelector(s); };
  var arts = [].slice.call(document.querySelectorAll('article[data-order]'));
  var st = { cat: 'all', tag: '', q: '', sort: 'recent' };
  var ON = ['bg-primary', 'text-on-primary'], OFF = ['bg-surface-container', 'text-on-surface-variant'];
  // «просмотры» и «сложность» для сортировок (демо-значения по порядку статей)
  var VIEWS = [9200, 7400, 6100, 8800, 5300, 6900, 4100], DIFF = [5, 4, 5, 3, 4, 5, 2];
  arts.forEach(function (a, i) { a.dataset.views = VIEWS[i % VIEWS.length]; a.dataset.diff = DIFF[i % DIFF.length]; });
  var total = +$('#showing-total').textContent, baseRange = $('#showing-range').textContent;

  function tagsOf(a) { return [].slice.call(a.querySelectorAll('span')).map(function (s) { return s.textContent.trim().toLowerCase(); }).filter(function (t) { return t.charAt(0) === '#'; }); }
  function apply() {
    var shown = 0, parent = arts[arts.length - 1].parentElement;
    var q = st.q.toLowerCase();
    var list = arts.slice().sort(function (a, b) {
      if (st.sort === 'estimated') return a.dataset.read - b.dataset.read;
      if (st.sort === 'popular') return b.dataset.views - a.dataset.views;
      if (st.sort === 'complexity') return b.dataset.diff - a.dataset.diff;
      return a.dataset.order - b.dataset.order;
    });
    var empty = $('#blog-empty');
    list.forEach(function (a) {
      var ok = (st.cat === 'all' || a.dataset.cat === st.cat) && (!st.tag || tagsOf(a).indexOf(st.tag) > -1) && (!q || a.innerText.toLowerCase().indexOf(q) > -1);
      a.classList.toggle('hidden', !ok);
      if (ok) shown++;
      if (a.parentElement === parent) parent.insertBefore(a, empty);
    });
    empty.classList.toggle('hidden', shown > 0);
    var filtered = st.cat !== 'all' || st.tag || q;
    $('#showing-range').textContent = filtered ? (shown ? '1–' + shown : '0') : baseRange;
    $('#showing-total').textContent = filtered ? shown : total;
  }
  var chips = [].slice.call(document.querySelectorAll('#category-filters button'));
  chips.forEach(function (b) {
    b.addEventListener('click', function () {
      st.cat = b.dataset.filter;
      chips.forEach(function (x) { var on = x === b; ON.forEach(function (c) { x.classList.toggle(c, on); }); OFF.forEach(function (c) { x.classList.toggle(c, !on); }); });
      apply();
    });
  });
  var tagBtns = [].slice.call(document.querySelectorAll('[data-tag]'));
  tagBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      st.tag = st.tag === b.dataset.tag ? '' : b.dataset.tag;
      tagBtns.forEach(function (x) { var on = x.dataset.tag === st.tag; ['text-primary', 'border-primary', 'bg-primary/10'].forEach(function (c) { x.classList.toggle(c, on); }); });
      apply();
    });
  });
  $('#article-search').addEventListener('input', function (e) { st.q = e.target.value.trim(); apply(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); $('#article-search').focus(); }
  });
  $('#sort-select').addEventListener('change', function (e) { st.sort = e.target.value; apply(); });
  // «Read» — страницы статей в макете не предусмотрены
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-article]'); if (!a) return;
    e.preventDefault(); P.toast('Article pages are not built yet in this demo', 'info');
  });
  // пагинация: в демо есть только первая страница
  var pg = $('#blog-pagination');
  pg.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b || b.disabled) return;
    if (b.textContent.trim() === '1') return;
    P.toast('Demo: only the first page has sample articles', 'info');
  });
  apply();
})();
