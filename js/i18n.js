/* Переключение языка EN / UK. Словарь — js/i18n-uk.js (ключ — английский текст, значение — украинский).
   Тексты в HTML и в data.js переводятся автоматически по точному совпадению (плюс правила для чисел и составных строк
   вида «A • B • C»); динамические строки в JS идут через Polyx.t(). */
(function () {
  var KEY = 'polyx:lang', lang = 'en';
  try {
    var s = localStorage.getItem(KEY);
    if (s === 'uk' || s === 'en') lang = s; else if (/^(uk|ru)/i.test(navigator.language || '')) lang = 'uk';
  } catch (e) {}
  var DICT = window.POLYX_UK || {}, RULES = window.POLYX_UK_RULES || [];
  var ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];
  var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, NOSCRIPT: 1 };
  function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }

  /* Перевод нормализованной строки или null */
  function tr(k) {
    if (!k) return null;
    if (DICT[k]) return DICT[k];
    for (var i = 0; i < RULES.length; i++) if (RULES[i][0].test(k)) return k.replace(RULES[i][0], RULES[i][1]);
    var seps = [' • ', ' / ', ' · '];
    for (var j = 0; j < seps.length; j++) {
      if (k.indexOf(seps[j]) < 0) continue;
      var parts = k.split(seps[j]), hit = false;
      var out = parts.map(function (p) { var r = tr(p); if (r !== null) { hit = true; return r; } return p; });
      if (hit) return out.join(seps[j]);
    }
    return null;
  }

  function t(s, vars) {
    var r = s;
    if (lang === 'uk') { var x = tr(norm(s)); if (x !== null) r = x; }
    if (vars) r = String(r).replace(/\{(\w+)\}/g, function (m, n) { return n in vars ? vars[n] : m; });
    return r;
  }
  function date(iso) {
    var d = new Date(iso + 'T00:00:00');
    try { return d.toLocaleDateString(lang === 'uk' ? 'uk-UA' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' }); } catch (e) { return iso; }
  }

  function tNode(n) {
    var p = n.parentNode; if (!p || SKIP[p.nodeName]) return;
    var v = n.nodeValue, x = tr(norm(v)); if (x === null) return;
    var nv = (/^\s/.test(v) ? ' ' : '') + x + (/\s$/.test(v) ? ' ' : '');
    if (nv !== v) n.nodeValue = nv;
  }
  function tAttr(el, a) {
    var v = el.getAttribute(a); if (!v) return;
    var x = tr(norm(v)); if (x !== null && x !== v) el.setAttribute(a, x);
  }
  function walk(root) {
    if (root.nodeType === 3) return tNode(root);
    if (root.nodeType !== 1) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n, list = [];
    while ((n = w.nextNode())) list.push(n);
    list.forEach(tNode);
    var els = [].slice.call(root.querySelectorAll('[placeholder],[title],[aria-label],[alt]'));
    if (root.matches && root.matches('[placeholder],[title],[aria-label],[alt]')) els.push(root);
    els.forEach(function (el) { ATTRS.forEach(function (a) { if (el.hasAttribute(a)) tAttr(el, a); }); });
  }

  document.documentElement.lang = lang === 'uk' ? 'uk' : 'en';
  if (lang === 'uk') {
    var tt = tr(norm(document.title)); if (tt !== null) document.title = tt;
    new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        if (m.type === 'characterData') tNode(m.target);
        else if (m.type === 'attributes') tAttr(m.target, m.attributeName);
        else [].forEach.call(m.addedNodes, walk);
      });
    }).observe(document.documentElement, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    var start = function () { walk(document.body); };
    if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
  }

  window.PolyxI18n = {
    lang: lang, t: t, tr: tr, date: date,
    set: function (l) { try { localStorage.setItem(KEY, l); } catch (e) {} location.reload(); }
  };
})();
