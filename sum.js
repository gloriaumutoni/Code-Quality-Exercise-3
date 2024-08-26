// getting sum of an array recursively
const sum = (array) =>
    array.length === 0 ? 0 : array[0] + sum(array.slice(1));  