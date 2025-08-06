// Функция для сброса игры
function resetGame() {
  deadCount = 0;
  lostCount = 0;
  deadElem.textContent = deadCount;
  lostElem.textContent = lostCount;

  // Удалим крота с текущей лунки
  getHole(currentMoleIndex).classList.remove('hole_has-mole');

  // Покажем крота в случайной новой лунке
  showMole();

  // Снова навесим обработчики клика
  for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', holeClickHandler);
  }
}

// Обновленная функция окончания игры
function endGame() {
  // Убираем обработчики, чтобы игрок не нажимал
  for (let i = 1; i <= 9; i++) {
    getHole(i).removeEventListener('click', holeClickHandler);
  }

  // Через небольшой таймаут сбрасываем игру, чтоб пользователь успел увидеть alert
  setTimeout(() => {
    resetGame();
  }, 1000);
}
