# POLYX.3D — портфолио и менторинг (статика)

Чистый HTML/CSS/JS, без сборщиков. Все пути относительные, `index.html` в корне.
Приоритет сайта: **портфолио → менторинг → блог**. Маркетплейс пока витрина со ссылками на сторонние площадки (своей оплаты нет).

## Страницы
`index.html` · `portfolio.html` (`?work=id` открывает работу) · `mentoring.html` · `blog.html` · `post.html?id=…` · `marketplace.html` · `product.html?id=…` · `about.html` (контакты в `#contact`) · `account.html` · `privacy.html` · `cart.html` (заглушка) · `404.html`

## Где менять данные
Всё в `js/data.js` (объект `window.POLYX_DATA`):
- `works` — работы портфолио (поле `model` связывает работу с моделью, `featured` — показать на главной);
- `models` — модели. У каждой `links: [{ platform, url }]` — ссылки на площадки, где модель выставлена; `free: true` — бесплатная; `hidden: true` — не показывать;
- `platforms` — список площадок (id, название, иконка, **ссылка на ваш магазин/профиль** — она идёт в блок «Все мои магазины»);
- `posts` — статьи блога (текст в `body`), `plans` — тарифы менторинга;
- `contact` — почта и соцсети (пустые поля скрываются). **Сейчас `email` = `contact@example.com`, замените на свою**: на него уходит заявка на менторинг;
- `profile`, `workCats`, `blogCats`.

Ссылки в `links[].url` и `platforms[].url` сейчас ведут на главные страницы площадок (заглушки) — замените на реальные.
Картинки пока ссылки из макета (googleusercontent); позже положите файлы в `assets/` и пропишите пути вида `assets/models/apex.webp`.

## Языки (EN / UA)
Переключатель в шапке, выбор хранится в localStorage (`polyx:lang`); по умолчанию берётся язык браузера.
Словарь — `js/i18n-uk.js`: ключ — точный английский текст, значение — перевод. Что не найдено в словаре, остаётся английским.
Новый текст на странице или в `data.js` нужно добавить в словарь. Числа вида «42k Tris» переводятся правилами в конце файла, строки «A • B» и «A / B» — по частям.

## Избранное и аккаунт
Сердечко в шапке и на карточках. Избранное лежит в localStorage (`polyx:wishlist:v2`) и показывается на `account.html`. Входа пока нет — когда появится бэкенд, интерфейс `js/store.js` можно перенести на аккаунт. Сброс: `?reset=1` к адресу любой страницы.

## Заявка на менторинг
Форма открывает почтовую программу с готовым письмом на `contact.email` (сервера нет). Позже можно заменить на Formspree/Cloudflare Worker, не меняя разметку.

## Цветовые темы и фон
Кнопка с палитрой в шапке: Mint, Rose, Sky, Amber, Violet (`polyx:accent`). Токены — `css/input.css` (блок THEMES). Фоновая геометрия — SVG в `js/shell.js` (поле `bg`). Шапка и подвал — один раз в `js/shell.js`.

## CSS
`css/site.css` собран Tailwind 3.4 из токенов макета (`tailwind.config.js`, `css/input.css`). Если добавите новые классы Tailwind в HTML/JS, CSS нужно пересобрать:
`npx tailwindcss@3 -c tailwind.config.js -i css/input.css -o css/site.css --minify`
Мелкие дополнения без пересборки лежат в `css/extra.css`.

## Локальный просмотр
```
python -m http.server 8765
```
и откройте http://localhost:8765/

## Заливка на GitHub Pages
1. Репозиторий `tech3dmodelshop`: загрузите **содержимое** этой папки в корень.
2. Settings → Pages → Source: *Deploy from a branch* → Branch: `main`, папка `/ (root)` → Save.
3. Через 1–2 минуты сайт откроется: https://someonelittle.github.io/tech3dmodelshop/
