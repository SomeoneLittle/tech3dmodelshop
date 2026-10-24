/* Менторство: тарифы из данных, FAQ-аккордеон, карусель отзывов, форма заявки. */
(function () {
  var D = window.POLYX_DATA, P = window.Polyx;
  var grid = document.getElementById('plans-grid');
  var BADGE = { neutral: 'bg-surface-container-high text-on-surface-variant', primary: 'bg-primary/10 text-primary', danger: 'bg-error-container text-on-error-container' };
  var ALL = Object.keys(BADGE).join(' ').split(' ');
  D.plans.forEach(function (p) {
    var n = P.clone(p.popular ? 'tpl-plan-popular' : 'tpl-plan');
    P.fill(n, { kind: p.kind, duration: ' ' + p.duration, name: p.name, desc: p.desc, price: '$' + p.price, priceNote: p.priceNote, note: p.note, popularLabel: p.popularLabel || '' });
    var kind = n.querySelector('[data-b=kind]');
    BADGE.neutral.split(' ').concat(BADGE.primary.split(' '), BADGE.danger.split(' ')).forEach(function (c) { kind.classList.remove(c); });
    BADGE[p.badge].split(' ').forEach(function (c) { kind.classList.add(c); });
    var ul = n.querySelector('[data-list=includes]'), tpl = document.getElementById('tpl-plan-li').content.firstElementChild;
    ul.innerHTML = '';
    p.includes.forEach(function (it) {
      var li = tpl.cloneNode(true), span = li.lastElementChild, extra = '';
      if (typeof it === 'string') span.textContent = it;
      else if (it.strong) { span.innerHTML = '<strong>' + P.esc(it.strong) + '</strong>' + P.esc(it.rest); li.className = 'flex items-start gap-space-xs ' + (it.cls || ''); }
      else { span.textContent = it.text; li.className = 'flex items-start gap-space-xs ' + (it.cls || ''); }
      ul.appendChild(li);
    });
    var cta = n.querySelector('[data-b-cta]'); cta.dataset.plan = p.id;
    cta.querySelectorAll('.material-symbols-outlined')[0].textContent = p.icon;
    grid.appendChild(n);
  });
  // Sign up -> выбрать тариф в форме
  grid.addEventListener('click', function (e) {
    var a = e.target.closest('[data-plan]'); if (!a || !a.dataset.plan || a.tagName !== 'A') return;
    var sel = document.querySelector('#mentoring-form select'); if (sel) sel.value = a.dataset.plan;
    P.toast('Plan selected in the application form', 'task_alt');
  });
  // FAQ
  var triggers = [].slice.call(document.querySelectorAll('.faq-trigger'));
  triggers.forEach(function (t) {
    var c0 = t.nextElementSibling; if (c0) c0.style.transition = 'opacity .2s';
    t.addEventListener('click', function () {
      var content = t.nextElementSibling, chev = t.querySelector('.material-symbols-outlined'), hidden = content.classList.contains('hidden');
      triggers.forEach(function (o) { o.nextElementSibling.classList.add('hidden'); var c = o.querySelector('.material-symbols-outlined'); c.style.transition = 'transform .2s'; c.style.transform = 'rotate(0deg)'; });
      if (hidden) { content.classList.remove('hidden'); chev.style.transform = 'rotate(180deg)'; }
    });
  });
  // карусель отзывов
  var prev = document.getElementById('carousel-prev'), next = document.getElementById('carousel-next'), track = document.getElementById('testimonial-track');
  if (prev && next && track) {
    track.style.transition = 'opacity .15s';
    function rot(dir) { track.style.opacity = '.4'; setTimeout(function () { if (dir > 0) track.appendChild(track.firstElementChild); else track.insertBefore(track.lastElementChild, track.firstElementChild); track.style.opacity = '1'; }, 150); }
    prev.addEventListener('click', function () { rot(-1); }); next.addEventListener('click', function () { rot(1); });
  }
})();
