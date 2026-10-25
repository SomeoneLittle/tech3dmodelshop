/* Аккаунт посетителя: избранные модели (пока в localStorage, позже — на аккаунте). */
(function () {
  var S = window.PolyxStore, P = window.Polyx, D = window.POLYX_DATA;
  var $ = function (s) { return document.getElementById(s); };
  $('acc-avatar').src = D.avatar;
  var grid = $('acc-grid');
  function render() {
    var ids = S.wish();
    grid.innerHTML = '';
    ids.forEach(function (id, i) { grid.appendChild(P.modelCard(S.byId[id], i)); });
    $('acc-count').textContent = P.t('{n} favorites', { n: ids.length });
    grid.classList.toggle('hidden', !ids.length);
    $('acc-empty').classList.toggle('hidden', ids.length > 0);
    $('acc-clear').classList.toggle('hidden', !ids.length);
  }
  grid.addEventListener('click', function (e) {
    var art = e.target.closest('article[data-id]'); if (!art || e.target.closest('a')) return;
    var act = e.target.closest('[data-action]');
    if (act && act.dataset.action === 'wish') { S.toggleWish(art.dataset.id); return; }
    location.href = P.productUrl(art.dataset.id);
  });
  $('acc-clear').addEventListener('click', function () { S.clearWish(); P.toast('Removed from favorites', 'heart_minus'); });
  document.addEventListener('polyx:change', render);
  render();
})();
