/* Корзина: позиции из хранилища, удаление, очистка, промокод SUMMER3D (-15%), итоги. */
(function () {
  var S = window.PolyxStore, P = window.Polyx;
  var $ = function (s) { return document.getElementById(s); };
  var cont = $('cart-items-container'), emptyState = $('empty-cart-state'), counter = $('cart-counter');
  var discount = 0;
  var LIC = { standard: 'Standard Commercial License', extended: 'Extended Studio License' };

  function item(x) {
    var m = S.byId[x.id], n = P.clone('tpl-cart-item'), price = S.unitPrice(m, x.lic);
    n.dataset.id = m.id; n.dataset.price = price; n.classList.add('cart-item');
    var licText = m.cartLicense && x.lic === 'standard' ? m.cartLicense : (m.id === 'apex-recon-mech-mk2' && x.lic === 'standard' ? 'Standard Commercial License — Up to $100k revenue' : LIC[x.lic]);
    var chips = m.chips;
    P.fill(n, { img: m.img, title: m.title, badge: m.cartBadge || (m.chips[2] || m.chips[0]).toUpperCase(), poly: m.cartPoly || m.tris,
      series: m.cartSeries || (m.catLabel.split(' / ')[0] + ' Series'), price: S.usd(price, true), licenseText: licText,
      chip0: chips[0] || '', chip1: chips[1] || '', chip2: chips[2] || '', sizeText: (m.size || '1.1 GB') + ' Instant .ZIP',
      perk: m.cartPerk || m.sub.split(' • ')[0] + ' & 4K PBR Textures included' });
    n.querySelectorAll('[data-b^=chip]').forEach(function (c) { c.classList.toggle('hidden', !c.textContent); });
    var li = n.querySelector('[data-b-icon=licenseIcon]'); if (li) li.textContent = m.cartLicenseIcon || (x.lic === 'extended' ? 'groups' : 'gavel');
    var pi = n.querySelector('[data-b-icon=perkIcon]'); if (pi) pi.textContent = m.cartPerkIcon || 'check_circle';
    n.style.transition = 'opacity .18s, transform .18s';
    // ссылка на товар
    n.querySelector('h2').style.cursor = 'pointer';
    n.querySelector('h2').addEventListener('click', function () { location.href = P.productUrl(m.id); });
    n.querySelector('img').style.cursor = 'pointer';
    n.querySelector('img').addEventListener('click', function () { location.href = P.productUrl(m.id); });
    return n;
  }

  function calc() {
    var items = S.cart(), count = items.length, sub = 0;
    items.forEach(function (x) { sub += S.unitPrice(S.byId[x.id], x.lic); });
    counter.textContent = '(' + count + ' item' + (count === 1 ? '' : 's') + ')';
    $('summary-qty').textContent = count; $('summary-subtotal').textContent = S.usd(sub, true);
    var disc = sub * discount, row = $('promo-applied-row');
    row.classList.toggle('hidden', !(discount > 0 && count));
    $('promo-discount-val').textContent = '-' + S.usd(disc, true);
    $('summary-total').textContent = S.usd(Math.max(0, sub - disc), true);
    cont.classList.toggle('hidden', !count);
    emptyState.classList.toggle('hidden', !!count); emptyState.classList.toggle('flex', !count);
    var cb = $('checkout-btn'); cb.disabled = !count; cb.classList.toggle('opacity-40', !count); cb.classList.toggle('cursor-not-allowed', !count);
  }
  function render() {
    cont.innerHTML = '';
    S.cart().forEach(function (x) { var n = item(x); n.classList.add('polyx-in'); cont.appendChild(n); });
    calc();
  }
  cont.addEventListener('click', function (e) {
    var b = e.target.closest('[data-action=remove]'); if (!b) return;
    var card = b.closest('.cart-item');
    card.style.opacity = '0'; card.style.transform = 'translateX(16px)';
    setTimeout(function () { S.removeFromCart(card.dataset.id); card.remove(); calc(); }, 180);
  });
  $('clear-all-btn').addEventListener('click', function () { S.clearCart(); render(); });
  var promo = $('promo-input'), fb = $('promo-feedback');
  $('apply-promo-btn').addEventListener('click', function () {
    var code = (promo.value || '').trim().toUpperCase();
    if (code === 'SUMMER3D') {
      discount = 0.15; fb.textContent = '✓ Coupon SUMMER3D applied (-15%)'; fb.classList.remove('hidden', 'text-error'); fb.classList.add('text-primary'); calc();
    } else if (code) {
      fb.textContent = 'Invalid promo token for this session'; fb.classList.remove('hidden', 'text-primary'); fb.classList.add('text-error');
    }
  });
  promo.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); $('apply-promo-btn').click(); } });
  $('checkout-btn').addEventListener('click', function () {
    var cb = this, html = cb.innerHTML;
    cb.innerHTML = '<span class="material-symbols-outlined text-[18px] animate-spin">refresh</span><span>Initiating Secure Portal...</span>';
    cb.classList.add('pointer-events-none', 'opacity-90');
    setTimeout(function () {
      cb.innerHTML = '<span class="material-symbols-outlined text-[18px]">lock_open</span><span>Handshake Verified</span>';
      setTimeout(function () {
        cb.innerHTML = html; cb.classList.remove('pointer-events-none', 'opacity-90');
        P.toast('Demo build: payments are not connected yet', 'info');
      }, 1100);
    }, 900);
  });
  document.addEventListener('polyx:change', calc);
  render();
})();
