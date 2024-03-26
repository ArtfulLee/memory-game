import { shuffleArray } from "./shuffleArray.js";
import { getCards } from "./getCards.js";
import { flipCard } from "./flipCard.js";
import { resetGame } from "./resetGame.js";

/**
 * @default
 * @readonly
 * @const {Array} - Начальный массив эмоджи для игры
 */
const EMOJIS = ["🥔", "🍒", "🥑", "🌽", "🥕", "🍇", "🍉", "🍌", "🥭", "🍍"];

/**
 * @default
 * @readonly
 * @const {Object} - Объект с селекторами DOM
 * @property {HTMLButtonElement} SELECTORS.startGame - Кнопка для запуска игры
 * @property {HTMLButtonElement} SELECTORS.resetButton - Кнопка для перезапуска игры
 * @property {HTMLDivElement} SELECTORS.moves - Количество шагов открытия карточек
 * @property {HTMLDivElement} SELECTORS.timer - Время игры
 * @property {HTMLDivElement} SELECTORS.boardContainer - Контейнер игрового поля
 * @property {HTMLDivElement} SELECTORS.board - Игровое поле
 * @property {HTMLDivElement} SELECTORS.win - Вы выиграли
 */
const SELECTORS = {
  startGame: document.body.querySelector(".start-button"),
  resetButton: document.body.querySelector(".reset-button"),
  moves: document.body.querySelector(".moves"),
  timer: document.body.querySelector(".timer"),
  boardContainer: document.body.querySelector(".board-container"),
  board: document.body.querySelector(".board"),
  win: document.body.querySelector(".win"),
};

/**
 * @default
 * @readonly
 * @const {Object} - Объект с состояниями игры
 * @property {number} STATE.amountMoves - Текущее количество ходов в игре
 * @property {number} STATE.amountTimer - Текущее время игры
 * @property {number} STATE.timerOnOff - Включение/Отключение таймера
 * @property {boolean} STATE.isStartGame - Идентификатор интервала для отслеживания времени
 * @property {boolean} STATE.amountFlippedCards - Текущее количество перевернутых пар карт
 */
const STATE = {
  amountMoves: 0,
  amountTimer: 0,
  timerOnOff: null,
  isStartGame: false,
  amountFlippedCards: 0,
};

/**
 * @var {Array} emojisForGames - Переменная для хранения массива с рандомно перетасованными эмоджи для игры
 */
let emojisForGames;

/**
 * @function generateGame - Функция генерации игрового поля
 * @param {Array} EMOJIS - Начальный массив эмоджи для игры
 */
function generateGame(EMOJIS) {
  // Берем первые 8 рандомных элементов массива для игры
  emojisForGames = shuffleArray(EMOJIS).splice(0, 8);
  // Для создания пар эмоджи перезаписываем полученные 8 элементов в перетасованные 16 элементов
  emojisForGames = shuffleArray([...emojisForGames, ...emojisForGames]);

  // Заполняем игровое поле карточками
  getCards(emojisForGames, SELECTORS);
}

/**
 * @function startGame - Запуск игры по кнопке "Начать"
 */
function startGame() {
  // Блокируем кнопку начала игры
  SELECTORS.startGame.classList.add("disabled");

  // Устанавливаем состояние игры, как начатая
  STATE.isStartGame = true;

  // Вешаем на игровое поле оброботчик события переворота карточек
  SELECTORS.board.addEventListener("click", (event) =>
    flipCard(event, emojisForGames, SELECTORS, STATE)
  );

  STATE.timerOnOff = setInterval(() => {
    STATE.isStartGame ? STATE.amountTimer++ : clearInterval(STATE.timerOnOff);

    SELECTORS.timer.innerText = `время:  ${STATE.amountTimer} sec`;
  }, 1000);
}

generateGame(EMOJIS);
SELECTORS.startGame.addEventListener("click", startGame);
SELECTORS.resetButton.addEventListener("click", resetGame);
