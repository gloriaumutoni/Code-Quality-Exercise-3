// Implement a JavaScript function to calculate the Fibonacci sequence up to a given number.

const fibonacci=(n)=>  Array.from({ length: n }).reduce((accumulator, _, i) => {
      if (i === 0) return [0];
      if (i === 1) return [0, 1];
      return [...accumulator, accumulator[i - 1] + accumulator[i - 2]];
  }, []);
