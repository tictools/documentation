/**
 * As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array.
 * If no step is given, the elements should go up by increments of one, corresponding to the old behavior.
 * The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
 * Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */

function rangeStep(start, end, step) {
  const numbersCollection = [];
  const increment = step ?? 1;

  function evaluateCondition(number) {
    const isAscending = start <= end;

    return isAscending ? number <= end : number >= end;
  }

  for (let number = start; evaluateCondition(number); number += increment) {
    numbersCollection.push(number);
  }

  return numbersCollection;
}
