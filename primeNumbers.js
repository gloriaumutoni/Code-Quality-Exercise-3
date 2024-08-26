const primeNumber = (number) => {
  if (number < 2) return false;
  return typeof number === "number"
    ? ![...Array(number).keys()].slice(2).some((i) => number % i === 0)
    : false;
};