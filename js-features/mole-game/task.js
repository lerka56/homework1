// Получаем ссылки на элементы счётчиков
const deadElem = document.getElementById('dead');
const lostElem = document.getElementById('lost');

let deadCount = 0;
let lostCount = 0;
let currentMoleIndex = 1; // Индекс лунки с кротом

// Возвращает элемент лунки по индексу (1..9)
function getHole(index) {
  return document.getElementById('hole' + index);
}

// Получаем случайное целое в диапазоне [min, max]
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Показываем крота в случайной лунке
function showMole() {
  // Убираем крота с текущей лунки
  getHole(currentMoleIndex).classList.remove('hole_has-mole');

  let newIndex;
  do {
    newIndex = randomInteger(1, 9);
  } while (newIndex === currentMoleIndex);
  currentMoleIndex = newIndex;

  // Добавляем класс, чтобы показать крота
  getHole(currentMoleIndex).classList.add('hole_has-mole');
}

// Обработка клика по лунке
function holeClickHandler(event) {
  const hole = event.currentTarget;

  if (hole.classList.contains('hole_has-mole')) {
    deadCount++;
    deadElem.textContent = deadCount;

    // Перемещаем крота в другую лунку
    showMole();
  } else {
    lostCount++;
    lostElem.textContent = lostCount;
  }

  checkGameEnd();
}

// Проверяем победу или поражение
function checkGameEnd() {
  if (deadCount >= 10) {
    alert('Поздравляем! Вы убили 10 кротов и выиграли игру!');
    endGame();
  } else if (lostCount >= 5) {
    alert('Игра окончена! Вы промахнулись 5 раз.');
    endGame();
  }
}

// Завершаем игру — убираем обработчики кликов (блокируем игру)
function endGame() {
  for (let i = 1; i <= 9; i++) {
    getHole(i).removeEventListener('click', holeClickHandler);
  }
  // Даем игроку время увидеть alert, затем сбрасываем игру
  setTimeout(resetGame, 1000);
}

// Сбрасываем игру к изначальному состоянию (обнуляем счётчики, показываем крота, навешиваем обработчики заново)
function resetGame() {
  deadCount = 0;
  lostCount = 0;
  deadElem.textContent = '0';
  lostElem.textContent = '0';

  // Удаляем крота с текущей лунки
  getHole(currentMoleIndex).classList.remove('hole_has-mole');

  // Показываем крота в случайной лунке
  showMole();

  // Навешиваем обработчики кликов заново
  for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', holeClickHandler);
  }
}

// Регистрация обработчиков клика на лунки при первой загрузке
for (let i = 1; i <= 9; i++) {
  getHole(i).addEventListener('click', holeClickHandler);
}

// Изначально запускаем игру с кротом в случайной лунке
showMole();
