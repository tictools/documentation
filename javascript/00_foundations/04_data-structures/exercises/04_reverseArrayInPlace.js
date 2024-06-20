/**
 * Write a function called 'reverseArrayInPlace', which takes an array given as argument and modifies it by reversing its elements.
 */

function reverseArrayInPlace(collection) {
  const collectionLenght = collection.length - 1;

  for (let index = 0; index < collectionLenght / 2; index++) {
    const simetricIndex = collectionLenght - index;
    const currentValue = collection[index];

    console.log({ index, simetricIndex, lng: collectionLenght / 2 });
    console.log({ pos: index < collectionLenght / 2 });

    collection[index] = collection[simetricIndex];
    collection[simetricIndex] = currentValue;
  }
}

const collection = [1, 2, 3, 4];
reverseArrayInPlace(collection);

console.log({ collection });
