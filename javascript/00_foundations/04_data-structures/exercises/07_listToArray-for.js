/**
 * Also write a 'listToArray' function that produces an array from a list.
 */

const list = {
  value: 10,
  rest: {
    value: 20,
    rest: {
      value: 30,
      rest: {
        value: 40,
        rest: {
          value: 50,
          rest: null,
        },
      },
    },
  },
};

function listToArray(list) {
  const collectionFromList = [];

  for (let node = list; node; node = node.rest) {
    collectionFromList.push(node.value);
  }

  return collectionFromList;
}

const arrayFromList = listToArray(list);
console.log({ arrayFromList });
