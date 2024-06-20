/**
 * Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
 */

let arrays = ["hello", [1, 2, 3], [4, 5, [1, 2, 3, ["a"]]], [6]];

function flattenRecursively(collection) {
  const initialFlattenedSet = [];

  return collection.reduce((flattenedSet, currentCollection) => {
    return Array.isArray(currentCollection)
      ? [...flattenedSet, ...flattenRecursively(currentCollection)]
      : [...flattenedSet, currentCollection];
  }, initialFlattenedSet);
}

console.log(flattenRecursively(arrays));
