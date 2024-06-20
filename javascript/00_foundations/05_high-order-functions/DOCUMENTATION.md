# Foundations :: High Order Functions

<figure style="text-align: center">

   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" alt="DOM Tree" width="100" />
   <figcaption>JavaScript</figcaption>
</figure>

> A large program is expensive. Size almost always implies complexity, and complexity confuses programmers. Confused programmers introduce errors. A large program provides a lot of space for these errors to hide, making them difficult to find.

Abstractions give us the ability to talk about problems at a higher (or more abstract) level, without being distracted by uninteresting details of implementation. Simple functions, as we have seen them so far, are a good way to build abstractions. But sometimes they are not enough.

## 1 :: What are High Order Fucntions?

High Order Fucntions (from now on HOF) are functions that operate on other functions, either taking them as arguments or returning them. They allow us to abstract over actions, not just values. They come in various forms.

You can define functions that create new functions:

```js
function multiplyBy(factor) {
  return function (multiplier) {
    return factor * multiplier;
  };
}
```

You can define functions that change other functions:

```js
function argumentsLogger(callback) {
  return (...args) => {
    console.log("calling with", args);

    let result = callback(...args);

    console.log("called with", args, ", returned", result);

    return result;
  };
}

const mathMinLogger = Math.min;
mathMinLogger(3, 2, 1);
```

You can define functions that provide new types of control flow:

```js
function repeat(n, action) {
  const foo = [];

  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function unless(check, then) {
  if (check) then();
}

function multiplyBy(n) {
  return n * 2;
}

repeat(3, (n) => {
  unless(n % 2 === 0, () => {
    console.log(multiplyBy(n));
  });
});
```

## 2 :: Array.prototype

### 2.1 :: `filter`

Imagine we need to filter a collection of elements depending on a condition. We could define it using this approach:

```js
function filter(collection, filterPredicate) {
  const filteredCollection = [];

  for (let element of collection) {
    if (filterPredicate(element)) {
      filteredCollection.push(element);
    }
  }

  return filteredCollection;
}

function isGreaterThan(threshold) {
  return function (element) {
    return element > threshold;
  };
}

const numbers = [1, 2, 3, 4, 5];
const numbersGreaterThanTwo = filter(numbers, isGreaterThan(2));

console.log(numbersGreaterThanTwo); // Output: [ 3, 4, 5 ]
```

Nevertheless, there is a more straigh forward way to do it using `Array.prototype.filter`.

This method creates a new array with all elements that pass the test implemented by the provided function. It doesn't mutate the original array, but rather returns a new one containing only the elements that meet the specified criteria.

```js
const numbers = [1, 2, 3, 4, 5, 6];
const numbersGreaterThanTwo = numbers.filter((num) => num > 2);
console.log(numbersGreaterThanTwo); // Output: [ 3, 4, 5 ]
```

- **Signature:** array.filter(callback(element, index, array), thisArg?)
- **Arguments:**
  - callback: a function to test each element of the array. It should return true to keep the element, or false otherwise. It can take three arguments:
    - _element_: The current element being processed in the array.
    - _index_ (optional): The index of the current element being processed in the array.
    - _array_ (optional): The array called upon.
  - thisArg (optional): An optional parameter to be used as this when executing callback.
- **Returns:** A new array containing all elements that pass the test implemented by the provided function.

### 2.2 :: `map`

Now imagine you have to transform an array by applying a function to all its elements and constructing a new array from the returned values. The new array will have the same length as the input array, but its contents will have been mapped to a new shape by the function. Something like this:

```js
const numbers = [1, 2, 3, 4, 5];

function map(collection, callback) {
  const mappedCollection = [];

  for (let index = 0; index < collection.length; index++) {
    const mappedValue = callback(collection[index]);
    mappedCollection.push(mappedValue);
  }

  return mappedCollection;
}

function doubleNumbers() {
  return function (value) {
    return value * 2;
  };
}

const doubledNumbers = map(numbers, doubleNumbers());

console.log(doubledNumbers); // Output: [ 2, 4, 6, 8, 10 ]
```

Nevertheless, there is another way to do it using `Array.prototype.map`.

This method creates a new array populated with the results of calling a provided function on every element in the calling array. It also doesn't mutate the original array but rather returns a new one with modified elements based on the provided function.

```js
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

- **Signature:** array.map(callback(element, index, array), thisArg?)
- **Arguments:**
  - callback: A function to call on each element of the array. It can take three arguments:
    - _element_: The current element being processed in the array.
    - _index_ (optional): The index of the current element being processed in the array.
    - _array_ (optional): The array called upon.
  - thisArg (optional): An optional parameter to be used as this when executing callback.
- **Returns:** A new array with the results of calling the provided function on every element in the array.

### 2.3 :: `reduce`

Another common thing to do with arrays is to calculate a single value from them. Our recurring example, adding a collection of numbers, is an instance of this.

```js
const numbers = [1, 2, 3, 4, 5];

function reduce(collection, callback, initialValue) {
  let accumulator = initialValue ?? collection[0];

  for (let index = 0; index < collection.length; index++) {
    const accumulatedValue = callback(accumulator, collection[index]);

    accumulator = accumulatedValue;
  }

  return accumulator;
}

function add(accumulator, value) {
  return accumulator + value;
}

const result = reduce(numbers, add, 0);

console.log(result); // Output: 15 (1 + 2 + 3 + 4 + 5)
```

As previous cases, we can use `Array.prototype.reduce`.

This method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It's useful for situations where you need to accumulate values from an array into a single result.

```js
const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(result); // Output: 15 (1 + 2 + 3 + 4 + 5)
```

- **Signature:** array.reduce(callback(accumulator, currentValue, index, array), initialValue?)
- **Arguments:**
  - callback: A function to execute on each element in the array, taking four arguments:
    - _accumulator:_ The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied (see below).
    - _currentValue_: The current element being processed in the array.
    - _index_ (optional): The index of the current element being processed in the array.
    - _array_ (optional): The array called upon.
  - initialValue (optional): A value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue.
- **Returns:** The single value that results from applying the reducer function to each element in the array.
