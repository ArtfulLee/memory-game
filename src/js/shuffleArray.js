/**
 * @function shuffleArray - Функция рандомного перемешивания элементов массива
 * @param {Array} array - Аргумент функции
 * @returns {Array} - Возвращаемый, рандомно перемешанный массив
 * @summary Алгоритм "Тасование Фишера — Йетса"
 */
export function shuffleArray(array) {
  let indexRandom;

  // Start Алгоритм "Тасование Фишера — Йетса"
  for (let indexCurrent = array.length - 1; indexCurrent > 0; indexCurrent--) {
    indexRandom = Math.floor(Math.random() * (indexCurrent + 1));
    [array[indexCurrent], array[indexRandom]] = [
      array[indexRandom],
      array[indexCurrent],
    ];
  }
  // End Алгоритм "Тасование Фишера — Йетса"

  return array;
}
