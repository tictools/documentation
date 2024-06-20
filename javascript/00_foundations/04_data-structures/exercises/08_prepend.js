/**
 * Write function 'prepend', which takes an element and a list and creates a new list that adds the element to the front of the input list
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

function prepend(element, list) {
  return {
    value: element,
    rest: list == null ? null : { ...list },
  };
}

const prependedList = prepend(10, prepend(20));
console.log({ prependedList });
