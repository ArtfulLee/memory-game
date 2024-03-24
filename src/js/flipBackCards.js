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
    setTimeout(() => {
      flippedCardOneEqual.parentElement.classList.remove("flipped", "disabled");
      flippedCardTwoForEqual.parentElement.classList.remove(
        "flipped",
        "disabled"
      );
    }, 1000);

    return false;
  }

  return true;
}
