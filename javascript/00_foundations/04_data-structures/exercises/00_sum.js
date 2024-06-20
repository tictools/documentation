/**
 * Write a sum function that takes an array of numbers and returns the sum of these numbers.
 * Run the example program and see whether it does indeed return 55.
 */

function sum(numberCollection) {
  let total = 0;

  for (let number of numberCollection) {
    total += number;
  }

  return total;
}
