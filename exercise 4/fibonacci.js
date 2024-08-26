// Implement a JavaScript function to calculate the Fibonacci sequence up to a given number.
const fibonacci = (number) =>
  number > 1 ? number * fibonacci(number - 1) : number;