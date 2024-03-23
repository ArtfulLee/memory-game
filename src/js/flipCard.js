/**
 * @function flipCard - Функция для открытия/переворота карточки
 * @param {Object} SELECTORS - Объект с селекторами DOM
 */
export function flipCard(SELECTORS) {
  SELECTORS.board.addEventListener("click", (event) => {
    // Если клик произошел по карточке, а не по игровому полю, тогда переворачиваем карточку.
    if (!event.target.classList.contains("board")) {
      const card = event.target.parentElement;

      if (!card.classList.contains("disabled")) {
        card.classList.toggle("flipped");
        card.classList.toggle("disabled");
      }
    }
  });
}
