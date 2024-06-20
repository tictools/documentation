/**
 * Arrays also have an 'every()' method analogous to the some method.
 * This method returns true when the given function returns true for every element in the array.
 * In a way, 'some()' is a version of the || operator that acts on arrays, and 'every()' is like the && operator.
 
 * Implement 'every' as a function that takes an array and a predicate function as parameters.
 * Write two versions, one using a loop and one using the some method.
 * 
 * Examples:
    * console.log(every([1, 3, 5], n => n < 10));   // Output: → true
    * console.log(every([2, 4, 16], n => n < 10));    // Output: → false
    * console.log(every([], n => n < 10));            // Output: → true
 */

function every(collection, predicate) {
  for (let index = 0; index < collection.length; index++) {
    const flag = predicate(collection[index]);
    if (flag === false) return false;
  }

  return true;
}

console.log(every([1, 3, 5], (n) => n < 10));
console.log(every([2, 4, 16], (n) => n < 10));
console.log(every([], (n) => n < 10));
console.log(every(["a", "b", "c"], (n) => typeof n === "string"));
console.log(every(["a", 1, "c"], (n) => typeof n === "string"));
