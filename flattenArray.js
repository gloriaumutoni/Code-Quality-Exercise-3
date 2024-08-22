const flattenArray = (arr) =>
    arr.reduce(
      (accumulator, item) =>
        Array.isArray(item)
          ? accumulator.concat(flattenArray(item))
          : accumulator.concat(item),
      []
    );