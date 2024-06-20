/**
 * Write function 'nth', which takes a list and a number and returns the element at the given position in the list
 * (with zero referring to the first element) or undefined when there is no such element.
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

function nth(list, index) {
  let listPosition = 0;
  let value;

  for (let node = list; node; node = node.rest) {
    if (listPosition === index) {
      value = node.value;
      break;
    }

    listPosition++;
  }

  return value;
}

const nthElement = nth(list, 10);
console.log({ nthElement });
