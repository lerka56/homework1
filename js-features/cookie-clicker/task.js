const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clicks = 0;
let isShrinked = false; // признак того, что печенька уменьшена

// Исходный размер
const originalSize = 200;
const shrinkSize = 150;

cookie.addEventListener('click', () => {
  // Увеличиваем счётчик и обновляем на странице
  clicks += 1;
  counter.textContent = clicks;

  // Чередуем размер печеньки
  if (isShrinked) {
    cookie.style.width = originalSize + 'px';
  } else {
    cookie.style.width = shrinkSize + 'px';
  }
  isShrinked = !isShrinked;
});
