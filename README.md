# POLYX.3D — тестовая версия сайта (статика)

Чистый HTML/CSS/JS, без сборщиков. Все пути относительные, `index.html` в корне.

## Страницы
`index.html` · `marketplace.html` · `product.html?id=…` · `cart.html` · `mentoring.html` · `blog.html` · `portfolio.html` · `about.html` · `404.html`
`about.html` собрана из двух вариантов макета (A + B), лишние секции можно просто удалить из HTML.
Страниц отдельных статей блога в макете нет — кнопки «Read» показывают уведомление.

## Заливка на GitHub Pages
1. Репозиторий `tech3dmodelshop`: загрузите **содержимое** этой папки в корень (так, чтобы `index.html` лежал в корне репозитория).
2. Settings → Pages → Source: *Deploy from a branch* → Branch: `main`, папка `/ (root)` → Save.
3. Через 1–2 минуты сайт откроется: https://someonelittle.github.io/tech3dmodelshop/

## Как заменить тестовые данные
Всё в `js/data.js` (объект `window.POLYX_DATA`):
- `models` — товары (id, title, cat, price, img, chips, tris, rating …); `hidden: true` — не показывать в каталоге;
- `posts` — посты блога на главной; `plans` — тарифы менторства.
Картинки пока ссылки из макета (googleusercontent); позже положите файлы в `assets/` и пропишите пути вида `assets/models/apex.webp`.
Шапка и подвал — один раз в `js/shell.js`.

## Тестовое хранилище
Избранное и корзина лежат в localStorage браузера. При первом заходе в них демо-товары (как на макете).
Сбросить: добавьте `?reset=1` к адресу любой страницы. Промокод в корзине: `SUMMER3D` (−15%).

## Цветовые темы и фон
Кнопка с палитрой в шапке переключает акцент: Mint (исходный), Rose, Sky, Amber, Violet. Выбор хранится в localStorage (`polyx:accent`).
Цвета-токены лежат в `css/input.css` (блок THEMES, сгенерирован). Картинки из макета (рендеры, логотип) в цвет акцента не перекрашиваются, логотип сдвигается по оттенку фильтром.
Фоновая геометрия — SVG в `js/shell.js` (поле `bg`), рисуется за страницей одним слоем.

## CSS
`css/site.css` собран Tailwind 3.4 из токенов макета (`tailwind.config.js`, `css/input.css`). Руками править не нужно; если добавите новые классы Tailwind в HTML/JS, CSS нужно пересобрать:
`npx tailwindcss@3 -c tailwind.config.js -i css/input.css -o css/site.css --minify`
