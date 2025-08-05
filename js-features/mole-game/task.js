// Получаем ссылки на элементы
const deadElem = document.getElementById('dead');
const lostElem = document.getElementById('lost');

let deadCount = 0;
let lostCount = 0;
let currentMoleIndex = 1; // Начинаем с hole1, где уже есть крот

// Возвращает элемент лунки по индексу (1..9)
function getHole(index) {
  return document.getElementById('hole' + index);
}

// Случайное целое число в диапазоне [min, max]
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Показываем крота в случайной лунке
function showMole() {
  // Убираем крота с текущей лунки
  getHole(currentMoleIndex).classList.remove('hole_has-mole');

  // Выбираем новую случайную лунку (от 1 до 9)
  let newIndex;
  do {
    newIndex = randomInteger(1, 9);
  } while (newIndex === currentMoleIndex); // чтобы не появлялся в той же

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

// Проверяем состояние игры (победа / поражение)
function checkGameEnd() {
  if (deadCount >= 10) {
    alert('Поздравляем! Вы убили 10 кротов и выиграли игру!');
    endGame();
  } else if (lostCount >= 5) {
    alert('Игра окончена! Вы промахнулись 5 раз.');
    endGame();
  }
}

// Завершаем игру - удаляем обработчики, можно заблокировать лунки
function endGame() {
  for (let i = 1; i <= 9; i++) {
    getHole(i).removeEventListener('click', holeClickHandler);
  }
}

// Регистрация обработчиков клика на все ячейки
for (let i = 1; i <= 9; i++) {
  getHole(i).addEventListener('click', holeClickHandler);
}

// Изначально крот уже на hole1 согласно разметке, можно переместить
// showMole(); // если хотите начать с случайной лунки, раскомментируйте
