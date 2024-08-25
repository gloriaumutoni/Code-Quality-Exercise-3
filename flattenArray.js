const levelOfNesting = (arr) => {
  if (!Array.isArray(arr)) return 0;
  return 1 + Math.max(0, ...arr.map(levelOfNesting));
};
const flattenArray = (arr) => (levelOfNesting(arr) ? arr.flat(Infinity) : arr);