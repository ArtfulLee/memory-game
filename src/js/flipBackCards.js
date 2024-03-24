/**
 *
 * @param {*} flippedCardOneEqual - Первая перевернутая карта
 * @param {*} flippedCardTwoForEqual Вторая перевернутая карта
 */
export function flipBackCards(flippedCardOneEqual, flippedCardTwoForEqual) {
  if (
    flippedCardOneEqual.nextElementSibling.innerText !==
    flippedCardTwoForEqual.nextElementSibling.innerText
  ) {
    flippedCardOneEqual.parentElement.classList.remove("flipped", "disabled");
    flippedCardTwoForEqual.parentElement.classList.remove(
      "flipped",
      "disabled"
    );
    return false;
  }

  return true;
}
