/**
 * @function getCards - Функция для получения игровых карточек
 * @param {Array} emojisForGames - Подготовленный массив с рандомно перетасованными эмоджи для игры
 * @param {Object} SELECTORS - Объект с селекторами DOM
 */
export function getCards(emojisForGames, SELECTORS) {
  emojisForGames.forEach((emoji) => {
    SELECTORS.board.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card">
        <div class="card-front"></div>
        <div class="card-back">${emoji}</div>
      </div>
      `
    );
  });
}
