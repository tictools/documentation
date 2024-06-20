/**
 * Write a function 'arrayToList' that builds up a list structure like the one shown when given [1, 2, 3] as argument.
 */

function arrayToList(collection) {
  const reversedCollection = collection.reverse();

  let list = {
    value: reversedCollection[0],
    rest: null,
  };

  for (let index = 1; index < reversedCollection.length; index++) {
    list = {
      value: reversedCollection[index],
      rest: { ...list },
    };
  }

  return list;
}

const listFromArray = arrayToList([10, 20, 30, 40, 50]);
console.log({ listFromArray });
