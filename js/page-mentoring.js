/* Менторство: тарифы из данных, FAQ-аккордеон, форма заявки (открывает письмо в почтовой программе). */
(function () {
  var D = window.POLYX_DATA, P = window.Polyx;
  var grid = document.getElementById('plans-grid');
  var BADGE = { neutral: 'bg-surface-container-high text-on-surface-variant', primary: 'bg-primary/10 text-primary', danger: 'bg-error-container text-on-error-container' };

  function includes(items) {
    return items.map(function (it) {
      var body = typeof it === 'string' ? P.esc(it) : '<strong>' + P.esc(it.strong) + '</strong>' + P.esc(it.rest);
      return '<li class="flex items-start gap-space-xs"><span class="material-symbols-outlined text-primary text-[18px] shrink-0">check_circle</span><span>' + body + '</span></li>';
    }).join('');
  }
  D.plans.forEach(function (p) {
    var pop = !!p.popular;
    grid.appendChild(P.html(
      '<div class="relative flex flex-col justify-between ' + (pop ? 'bg-surface-container-high shadow-2xl lg:-mt-4' : 'bg-surface-container shadow-md hover:shadow-xl') + ' rounded-xl p-space-lg transition-transform duration-200 hover:-translate-y-1">' +
      (pop ? '<div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-space-md py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider font-bold shadow-md flex items-center gap-1 whitespace-nowrap"><span class="material-symbols-outlined text-[14px]">star</span><span>' + P.esc(p.popularLabel) + '</span></div>' : '') +
      '<div class="space-y-space-md pt-space-xs"><div class="flex items-center justify-between gap-2">' +
      '<span class="font-code-tech text-code-tech px-space-sm py-0.5 rounded-full uppercase tracking-wider ' + BADGE[p.badge] + '">' + P.esc(p.kind) + '</span>' +
      '<span class="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-[16px] text-primary">schedule</span><span>' + P.esc(p.duration) + '</span></span></div>' +
      '<div><h3 class="font-headline-md text-headline-md text-on-surface mb-1">' + P.esc(p.name) + '</h3><p class="font-body-sm text-body-sm text-on-surface-variant">' + P.esc(p.desc) + '</p></div>' +
      '<div class="py-space-sm"><div class="flex items-baseline gap-space-xs"><span class="font-label-sm text-label-sm text-on-surface-variant">from</span><span class="font-headline-xl text-headline-xl text-primary font-bold">$' + p.price + '</span><span class="font-body-sm text-body-sm text-on-surface-variant">' + P.esc(p.priceNote) + '</span></div>' +
      '<div class="font-code-tech text-[11px] text-on-surface-variant/70 mt-1">' + P.esc(p.note) + '</div></div>' +
      '<div class="space-y-space-sm pt-space-xs"><div class="font-label-md text-label-md text-on-surface uppercase tracking-wider">What\'s Included:</div>' +
      '<ul class="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">' + includes(p.includes) + '</ul></div></div>' +
      '<div class="pt-space-lg"><a class="w-full inline-flex items-center justify-center py-3 px-space-md ' + (pop ? 'bg-primary hover:bg-secondary text-on-primary shadow-lg font-bold' : 'bg-surface-container-high hover:bg-surface-bright text-primary') + ' font-label-md text-label-md rounded-lg transition-all gap-space-xs" data-plan="' + p.id + '" href="#application-section"><span>Request this plan</span><span class="material-symbols-outlined text-[18px]">' + p.icon + '</span></a></div></div>'));
  });

  // форма: список вариантов, программы
  var sel = document.getElementById('f-plan');
  sel.innerHTML = '<option value="intro">' + P.esc(P.t('Free intro call')) + '</option>' + D.plans.map(function (p) {
    return '<option value="' + p.id + '">' + P.esc(P.t(p.name)) + ' (' + P.t('from') + ' $' + p.price + ')</option>';
  }).join('');
  grid.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-plan]'); if (!a) return;
    sel.value = a.dataset.plan; P.toast('Plan selected in the application form', 'task_alt');
  });
  document.getElementById('f-software').innerHTML = ['Blender', 'ZBrush', 'Maya', 'Substance Painter', 'Unreal Engine 5', 'Marmoset Toolbag'].map(function (s, i) {
    return '<label class="cursor-pointer"><input class="peer sr-only" name="software" type="checkbox" value="' + s + '"' + (i === 0 || i === 3 || i === 4 ? ' checked' : '') + '/><span class="inline-flex items-center px-space-md py-1.5 rounded-full font-code-tech text-code-tech bg-surface-container-low text-on-surface-variant peer-checked:bg-primary peer-checked:text-on-primary transition-all select-none">' + s + '</span></label>';
  }).join('');

  // отправка: письмо в почтовой программе
  var form = document.getElementById('mentoring-form'), fb = document.getElementById('form-feedback');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (id) { return document.getElementById(id).value.trim(); };
    var soft = [].slice.call(form.querySelectorAll('input[name=software]:checked')).map(function (i) { return i.value; }).join(', ');
    var body = 'Name: ' + v('f-name') + '\nEmail: ' + v('f-email') + '\nPortfolio: ' + v('f-link') + '\nInterested in: ' + sel.options[sel.selectedIndex].text + '\nSoftware: ' + soft + '\n\n' + v('f-msg');
    var to = D.contact.email;
    fb.textContent = P.t('Your email app should open with the application. If nothing happened, write to {email}.', { email: to });
    fb.classList.remove('hidden');
    location.href = 'mailto:' + to + '?subject=' + encodeURIComponent('Mentoring application: ' + v('f-name')) + '&body=' + encodeURIComponent(body);
  });

  // FAQ
  var triggers = [].slice.call(document.querySelectorAll('.faq-trigger'));
  triggers.forEach(function (t) {
    t.addEventListener('click', function () {
      var content = t.nextElementSibling, chev = t.querySelector('.material-symbols-outlined'), hidden = content.classList.contains('hidden');
      triggers.forEach(function (o) { o.nextElementSibling.classList.add('hidden'); o.querySelector('.material-symbols-outlined').style.transform = 'rotate(0deg)'; });
      if (hidden) { content.classList.remove('hidden'); chev.style.transform = 'rotate(180deg)'; }
    });
  });
  if (location.hash === '#faq-container' && triggers[0]) triggers[0].click();
})();
