const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

cookie.addEventListener('click', () => {
  // Увеличиваем счётчик и обновляем на странице
  counter.textContent = +counter.textContent + 1;

  // Чередуем размер печеньки: нечётный клик — маленький размер, чётный — большой
  cookie.style.width = (counter.textContent % 2) ? '150px' : '200px';
  cookie.style.height = cookie.style.width; // если нужна квадратная печенька
});
