/* Мини-хранилище: избранное и корзина в localStorage (только для теста, без сервера).
   Сброс демо-данных: добавьте ?reset=1 к адресу любой страницы. */
(function () {
  var D = window.POLYX_DATA;
  var byId = {};
  D.models.forEach(function (m) { byId[m.id] = m; });
  var KEY = { w: 'polyx:wishlist', c: 'polyx:cart', s: 'polyx:seeded:v1', r: 'polyx:ratings' };
  var mem = {};
  function read(k, d) { try { var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return k in mem ? mem[k] : d; } }
  function write(k, v) { mem[k] = v; try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function drop(k) { delete mem[k]; try { localStorage.removeItem(k); } catch (e) {} }

  if (/[?&]reset=1/.test(location.search)) {
    [KEY.w, KEY.c, KEY.s, KEY.r].forEach(drop);
    history.replaceState(null, '', location.pathname + location.hash);
  }
  // Демо-данные при первом заходе (как на макете: избранное и 3 позиции в корзине)
  if (!read(KEY.s, false)) {
    write(KEY.w, ['tactical-exosuit-helmet', 'apex-recon-mech-mk2', 'orbital-dropship']);
    write(KEY.c, [{ id: 'apex-recon-mech-mk2', lic: 'standard' }, { id: 'heavy-industrial-walker', lic: 'standard' }, { id: 'hologram-shader-pack-vol2', lic: 'standard' }]);
    write(KEY.s, true);
  }

  function changed() { document.dispatchEvent(new CustomEvent('polyx:change')); }
  window.addEventListener('storage', changed);

  var Store = {
    byId: byId,
    catalog: function () { return D.models.filter(function (m) { return !m.hidden; }); },
    // цены
    unitPrice: function (m, lic) { return lic === 'extended' ? Math.round(m.price * 3.04) : m.price; },
    usd: function (n, dec) { return '$' + (dec ? Number(n).toFixed(2) : String(n)); },
    priceText: function (m) { return m.price === 0 ? 'FREE' : '$' + m.price; },
    // избранное
    wish: function () { return read(KEY.w, []).filter(function (id) { return byId[id]; }); },
    isWish: function (id) { return read(KEY.w, []).indexOf(id) > -1; },
    toggleWish: function (id) {
      var w = read(KEY.w, []), i = w.indexOf(id);
      if (i > -1) w.splice(i, 1); else w.push(id);
      write(KEY.w, w); changed(); return i === -1;
    },
    // оценки: средняя считается из стартового рейтинга модели + голос пользователя
    userRating: function (id) { return (read(KEY.r, {}))[id] || 0; },
    setRating: function (id, n) { var r = read(KEY.r, {}); if (n) r[id] = n; else delete r[id]; write(KEY.r, r); changed(); },
    ratingOf: function (m) {
      var u = (read(KEY.r, {}))[m.id] || 0;
      return u ? { avg: (m.rating * m.reviews + u) / (m.reviews + 1), count: m.reviews + 1, user: u } : { avg: m.rating, count: m.reviews, user: 0 };
    },
    // корзина
    cart: function () { return read(KEY.c, []).filter(function (x) { return byId[x.id]; }); },
    inCart: function (id) { return read(KEY.c, []).some(function (x) { return x.id === id; }); },
    addToCart: function (id, lic) {
      var c = read(KEY.c, []), f = c.filter(function (x) { return x.id === id; })[0];
      if (f) { f.lic = lic || f.lic; } else c.push({ id: id, lic: lic || 'standard' });
      write(KEY.c, c); changed(); return !f;
    },
    setLicense: function (id, lic) {
      var c = read(KEY.c, []); c.forEach(function (x) { if (x.id === id) x.lic = lic; }); write(KEY.c, c); changed();
    },
    removeFromCart: function (id) { write(KEY.c, read(KEY.c, []).filter(function (x) { return x.id !== id; })); changed(); },
    clearCart: function () { write(KEY.c, []); changed(); }
  };
  window.PolyxStore = Store;
})();
