import { shuffleArray } from "./shuffleArray.js";

/**
 * @default
 * @readonly
 * @const {Array} - Начальный массив эмоджи для игры
 */
const EMOJIS = ["🥔", "🍒", "🥑", "🌽", "🥕", "🍇", "🍉", "🍌", "🥭", "🍍"];

/**
 * @default
 * @readonly
 * @const {Object}
 * @property {HTMLButtonElement} SELECTORS.startGame - Кнопка для запуска игры
 * @property {HTMLDivElement} SELECTORS.moves - Количество шагов открытия карточек
 * @property {HTMLDivElement} SELECTORS.timer - Время игры
 * @property {HTMLDivElement} SELECTORS.board - Игровое поле
 * @property {HTMLDivElement} SELECTORS.win - Вы выиграли
 */
const SELECTORS = {
  startGame: document.body.querySelector("button"),
  moves: document.body.querySelector(".moves"),
  timer: document.body.querySelector(".timer"),
  board: document.body.querySelector(".board"),
  win: document.body.querySelector(".win"),
};

/**
 * @default
 * @readonly
 * @const {Object}
 * @property {number} STATE.moves - Текущее количество ходов в игре (1 ход = 2 перевернутым картам)
 * @property {number} STATE.timer - Текущее время игры
 * @property {boolean} STATE.isStartGame - Текущее состояние игры
 * @property {boolean} STATE.amountFlippedCards - Текущее количество перевернутых пар карт
 */
const STATE = {
  amountMoves: 0,
  amountTimer: 0,
  isStartGame: false,
  amountFlippedCards: 0,
};

/**
 * @function generateGame - Функция генерации игры
 * @param {Array} EMOJIS - Начальный массив эмоджи для игры
 */
function generateGame(EMOJIS) {
  // Берем первые 8 рандомных элементов массива для игры
  const emojisForGames = shuffleArray(EMOJIS).splice(0, 8);

  // Создаем и перемешиваем массив чисел для "data attribute" карточек
  const arrayOfDataAtrributeCards = shuffleArray(
    [...Array(emojisForGames.length * 2).keys()].map((index) => index + 1)
  );

  console.log(arrayOfDataAtrributeCards);
  console.log(emojisForGames);
}

generateGame(EMOJIS);
