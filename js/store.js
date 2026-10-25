/* Мини-хранилище: избранное посетителя в localStorage (пока без сервера и входа).
   Позже тот же интерфейс можно перенести на аккаунт. Сброс: добавьте ?reset=1 к адресу любой страницы. */
(function () {
  var D = window.POLYX_DATA;
  var byId = {}, platById = {};
  D.models.forEach(function (m) { byId[m.id] = m; });
  D.platforms.forEach(function (p) { platById[p.id] = p; });
  var KEY = { w: 'polyx:wishlist:v2' };
  var mem = {};
  function read(k, d) { try { var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return k in mem ? mem[k] : d; } }
  function write(k, v) { mem[k] = v; try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function drop(k) { delete mem[k]; try { localStorage.removeItem(k); } catch (e) {} }

  if (/[?&]reset=1/.test(location.search)) {
    drop(KEY.w);
    history.replaceState(null, '', location.pathname + location.hash);
  }

  function changed() { document.dispatchEvent(new CustomEvent('polyx:change')); }
  window.addEventListener('storage', changed);

  window.PolyxStore = {
    byId: byId,
    platform: function (id) { return platById[id]; },
    catalog: function () { return D.models.filter(function (m) { return !m.hidden; }); },
    wish: function () { return read(KEY.w, []).filter(function (id) { return byId[id]; }); },
    isWish: function (id) { return read(KEY.w, []).indexOf(id) > -1; },
    toggleWish: function (id) {
      var w = read(KEY.w, []), i = w.indexOf(id);
      if (i > -1) w.splice(i, 1); else w.push(id);
      write(KEY.w, w); changed(); return i === -1;
    },
    clearWish: function () { write(KEY.w, []); changed(); }
  };
})();
