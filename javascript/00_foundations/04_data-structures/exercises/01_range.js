/**
 * Write a range function that takes two arguments, start and end,
 * and returns an array containing all the numbers from start up to and including end.
 */

function range(start, end) {
  const numbersCollection = [];

  for (let number = start; number <= end; number++) {
    numbersCollection.push(number);
  }

  return numbersCollection;
}
