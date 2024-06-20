/**
 * Write a 'listToArray' function that produces an array from a list.
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
  let clonedList = { ...list };
  let next = true;

  while (next) {
    collectionFromList.push(clonedList.value);

    next = Boolean(clonedList.rest);

    clonedList = { ...clonedList.rest };
  }

  return collectionFromList;
}

const arrayFromList = listToArray(list);
console.log({ arrayFromList });
