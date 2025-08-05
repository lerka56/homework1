// Получаем элемент, в котором отображается число секунд
const timerElem = document.getElementById('timer');

// Читаем стартовое значение из HTML в виде числа
let secondsLeft = parseInt(timerElem.textContent, 10);

// Функция, которая обновляет таймер каждую секунду
const countdown = () => {
  if (secondsLeft > 0) {
    secondsLeft--; // уменьшаем секунды
    timerElem.textContent = secondsLeft; // обновляем на странице
  } else {
    clearInterval(intervalId); // останавливаем таймер
    alert('Вы победили в конкурсе!');
  }
};

// Запускаем таймер, который вызывает функцию каждую 1 секунду (1000 мс)
const intervalId = setInterval(countdown, 1000);
