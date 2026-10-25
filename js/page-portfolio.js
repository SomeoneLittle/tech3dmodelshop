/* Портфолио: фильтры (счётчики считаются сами), лайтбокс с листанием, ←/→ и Esc. */
(function () {
  var $ = function (s) { return document.querySelector(s); };
  var cards = [].slice.call(document.querySelectorAll('.artwork-card'));
  var btns = [].slice.call(document.querySelectorAll('.portfolio-filter-btn'));
  var ON = ['bg-primary', 'text-on-primary', 'font-semibold'], OFF = ['bg-surface-container', 'text-on-surface-variant'];
  var current = 'all';

  btns.forEach(function (b) {
    var k = b.dataset.filter, n = k === 'all' ? cards.length : cards.filter(function (c) { return c.dataset.category === k; }).length;
    b.querySelector('[data-count]').textContent = n;
  });
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

  var modal = $('#art-modal'), box = $('#modal-container'), idx = 0;
  function visible() { return cards.filter(function (c) { return current === 'all' || c.dataset.category === current; }); }
  function open(card) {
    var d = card.dataset, img = card.querySelector('img');
    $('#modal-title').textContent = d.title; $('#modal-year').textContent = d.year; $('#modal-category').textContent = d.category.toUpperCase();
    $('#modal-stack').textContent = d.stack; $('#modal-desc').textContent = d.desc; $('#modal-tris').textContent = d.tris;
    if (img) { $('#modal-img').src = img.src; $('#modal-img').alt = d.title; }
    modal.classList.remove('opacity-0', 'pointer-events-none'); modal.classList.add('opacity-100');
    box.classList.remove('scale-95'); box.classList.add('scale-100');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    modal.classList.remove('opacity-100'); modal.classList.add('opacity-0', 'pointer-events-none');
    box.classList.remove('scale-100'); box.classList.add('scale-95'); document.body.style.overflow = '';
  }
  function isOpen() { return !modal.classList.contains('pointer-events-none'); }
  function step(d) { var v = visible(), i = v.indexOf(cards[idx]); if (i < 0) i = 0; idx = cards.indexOf(v[(i + d + v.length) % v.length]); open(cards[idx]); }
  cards.forEach(function (c, i) { c.addEventListener('click', function () { idx = i; open(c); }); });
  $('#modal-close-btn').addEventListener('click', close);
  modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
  $('#modal-prev-btn').addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
  $('#modal-next-btn').addEventListener('click', function (e) { e.stopPropagation(); step(1); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
    if (isOpen() && e.key === 'ArrowRight') step(1);
    if (isOpen() && e.key === 'ArrowLeft') step(-1);
  });
})();
