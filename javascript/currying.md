# Currying

## Origin

Its name comes from Haskel Curry, mathematian with a great impact over functional programming paradigm.

## What

Currying is the technique that consists of transforming a function that takes multiple arguments (or more specifically an n-tuple as an argument) into a sequence of functions that takes a single argument (the inverse operation to the composition of functions in mathematics).

## Example

```javascript
const multiplyBy = function (n) {
  return function (factor1) {
    return factor1 * n;
  };
};

const multiplyByFive = multiplyBy(5);

console.log(multiplyByFive(10)); // 50
```
