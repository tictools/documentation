/**
 * Write a function called 'reverseArray', which takes an array as argument and produce a new array that has the same elements in the inverse order.
 */

function reverseArray(collection) {
  const reversedArray = [];
  const collectionLenght = collection.length - 1;

  for (let index = 0; index <= collectionLenght / 2; index++) {
    const simetricIndex = collectionLenght - index;

    reversedArray[index] = collection[simetricIndex];

    reversedArray[simetricIndex] = collection[index];
  }

  return reversedArray;
}

const collection = [1, 2, 3, 4];
const reversedCollection = reverseArray(collection);

console.log({ collection });
console.log({ reversedCollection });
