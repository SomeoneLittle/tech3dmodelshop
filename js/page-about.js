/* About: список контактов строится из D.contact (пустые поля не показываются). */
(function () {
  var D = window.POLYX_DATA, P = window.Polyx, C = D.contact;
  var rows = [['email', 'mail', 'Email', 'mailto:' + C.email, C.email], ['telegram', 'send', 'Telegram', C.telegram, C.telegram],
    ['artstation', 'brush', 'ArtStation', C.artstation, C.artstation], ['sketchfab', '3d_rotation', 'Sketchfab', C.sketchfab, C.sketchfab],
    ['youtube', 'play_circle', 'YouTube', C.youtube, C.youtube], ['discord', 'forum', 'Discord', C.discord, C.discord]];
  document.getElementById('contact-links').innerHTML = rows.filter(function (r) { return C[r[0]]; }).map(function (r) {
    var ext = r[0] !== 'email';
    return '<a class="px-store px-store-lg" href="' + P.esc(r[3]) + '"' + (ext ? ' target="_blank" rel="noopener noreferrer"' : '') + '><span class="flex items-center gap-1.5"><span class="material-symbols-outlined">' + r[1] + '</span>' + r[2] + '</span><span class="material-symbols-outlined">' + (ext ? 'open_in_new' : 'arrow_forward') + '</span></a>';
  }).join('');
})();
