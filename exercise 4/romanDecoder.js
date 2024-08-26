function romanDecoder(roman) {
  const romanMatrix = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  return roman
    .split("")
    .map((value) => romanMatrix[value])
    .reduce(
      (accumulator, value, index, array) => accumulator + (array[index + 1] > value ? -value : value),
      0
    );
}