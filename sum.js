const sum = (numbers) =>
    numbers.length === 0 ? 0 : numbers[0] + sum(numbers.slice(1));
  