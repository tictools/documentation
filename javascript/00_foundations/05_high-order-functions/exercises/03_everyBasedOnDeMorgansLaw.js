/**
 *  De Morgan's law states that the negation of a conjunction is the disjunction of the negations, and vice versa.
 * In simpler terms, it means that "not (A and B)" is the same as "(not A) or (not B)", and "not (A or B)" is the same as "(not A) and (not B)".
 */
function everyBasedOnDeMorgansLaw(collection, predicate) {
  return !collection.some((element) => predicate(element) === false);
}

console.log(everyBasedOnDeMorgansLaw([1, 3, 5], (n) => n < 10));
console.log(everyBasedOnDeMorgansLaw([2, 4, 16], (n) => n < 10));
console.log(everyBasedOnDeMorgansLaw([], (n) => n < 10));
console.log(
  everyBasedOnDeMorgansLaw(["a", "b", "c"], (n) => typeof n === "string")
);
console.log(
  everyBasedOnDeMorgansLaw(["a", 1, "c"], (n) => typeof n === "string")
);
