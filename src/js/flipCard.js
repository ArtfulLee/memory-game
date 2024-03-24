import { flipBackCards } from "./flipBackCards.js";

/**
 * @function flipCard - Функция для открытия/переворота карточки
 * @param {Object} SELECTORS - Объект с селекторами DOM
 * @param {Object} STATE - Объект с состояниями игры
 */
let flippedCardOneEqual;
let flippedCardTwoForEqual;

export function flipCard(SELECTORS, STATE) {
  SELECTORS.board.addEventListener("click", (event) => {
    // Если клик произошел по карточке, а не по игровому полю, тогда переворачиваем карточку.
    if (!event.target.classList.contains("board")) {
      const card = event.target.parentElement;

      // Если карта не перевернута, то переворачиваем.
      if (!card.classList.contains("disabled")) {
        card.classList.toggle("flipped");
        card.classList.toggle("disabled");

        // Увеличиваем оличество шагов в игре
        SELECTORS.moves.innerText = `${++STATE.amountMoves} шагов`;

        // Первый переворот записываем в flippedCardOneEqual
        // Второй переворот карты записываем в flippedCardTwoForEqual и вызываем функцию flipBackCards для сравнения flippedCardOneEqual и flippedCardTwoForEqual
        if (STATE.amountMoves !== 0 && STATE.amountMoves % 2 !== 0) {
          flippedCardOneEqual = event.target;
        } else {
          flippedCardTwoForEqual = event.target;
          flipBackCards(flippedCardOneEqual, flippedCardTwoForEqual);

          // считаем количесво открытых пар в игре
          if (flipBackCards(flippedCardOneEqual, flippedCardTwoForEqual)) {
            STATE.amountFlippedCards++;
          }

          // Очищаем переменный для сравнения двух перевернутых подрят карт
          flippedCardOneEqual = flippedCardTwoForEqual = null;
        }
      }
    }
  });
}
