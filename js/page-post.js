/* Страница статьи (?id=...): текст берётся из posts[].body в data.js. */
(function () {
  var D = window.POLYX_DATA, P = window.Polyx;
  var $ = function (s) { return document.getElementById(s); };
  var p = D.posts.filter(function (x) { return x.id === P.param('id'); })[0];
  if (!p) { location.replace('404.html'); return; }
  document.title = P.t(p.title) + ' | POLYX.3D';
  $('crumb').textContent = p.title; $('a-tag').textContent = p.tag; $('a-date').textContent = P.date(p.date);
  $('a-read').textContent = P.t('{n} min read', { n: p.read }); $('a-title').textContent = p.title; $('a-excerpt').textContent = p.excerpt;
  $('a-img').src = p.img; $('a-img').alt = p.title;
  $('a-body').innerHTML = p.body.map(function (t) { return '<p>' + P.esc(t) + '</p>'; }).join('');
  $('a-tags').innerHTML = p.tags.map(function (t) { return '<span class="px-2 py-0.5 rounded bg-surface-container-high font-code-tech text-[11px] text-on-surface-variant">' + P.esc(t) + '</span>'; }).join('');
  $('more').innerHTML = D.posts.filter(function (x) { return x.id !== p.id; }).slice(0, 2).map(function (x) {
    return '<a class="group bg-surface-container-low border border-outline-variant/30 hover:border-primary rounded-xl p-space-md transition-all" href="' + P.postUrl(x.id) + '"><div class="font-code-tech text-[11px] text-on-surface-variant mb-1">' + P.date(x.date) + '</div><h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">' + P.esc(x.title) + '</h3></a>';
  }).join('');
})();
