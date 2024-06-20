# Foundations :: Data Structures (objects & arrays)

<figure style="text-align: center">

   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" alt="DOM Tree" width="100" />
   <figcaption>JavaScript</figcaption>
</figure>

> Objects allow us to group values, including other objects, to build more complex structures.

## 1 :: Data sets: Array

JS provides a data type specifically for storing sequences of values. It is called an _array_ and is written as a list of values in square brackets, separated by commas:

```js
const nameCollection = ["John Doe", "Ada Lovelace"];
```

The notation for accessing elements within an array also uses square brackets. There are two ways to define array position to be accessed:

1. a pair of square brackets immediately following an expression, with a number, will look for the element in the expression on the left that corresponds to the given index.
2. a pair of square brackets immediately following an expression, with another expression inside them, will look for the element in the expression on the left that corresponds to the index given by the expression in the square brackets.

```js
const nameCollection = ["John Doe", "Ada Lovelace"];

//given a number
console.log(nameCollection[0]); // "John Doe"

//given an expression
console.log(nameCollection[2 - 1]); // "Ada Lovelace"
```

> [!TIP]  
> In JS arrays are _zero-based_ (as common in many other programming languages), which means that the indexing of elements within an array starts from 0, not 1. This means that the first element in an array is accessed using index 0, the second element is accessed using index 1, and so on.

### 1.1 :: Loops

JS provides a couple of methods to iterate over each element of the array. This iterative action is called loop and allows performing some action at each step.

#### 1.1.1 :: `for`

The **_for_** loop in JS is a fundamental control flow statement that allows you to execute a block of code repeatedly. It's particularly useful for iterating over arrays, strings, or numbers. Here's a breakdown of the components of a for loop:

```js
for (initialization; condition; iteration) {
  // code to be executed
}
```

- **Initialization**: This part is executed before the loop starts. It's typically used to initialize a variable or set up any necessary conditions. In the example `let i = 0;`, i is initialized with the value 0. This is where you typically set up the loop variable.

- **Condition**: This part defines the condition for the loop to continue iterating. As long as the condition evaluates to true, the loop will continue executing. Once the condition becomes false, the loop terminates. In the example `i < array.length;`, the loop continues as long as the variable i is less than the length of the array.

- **Iteration**: This part is executed at the end of each iteration of the loop. It's typically used to update the loop variable. In the example `i++`, i is incremented by 1 after each iteration of the loop.

```js
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

#### 1.1.2 :: `for...of`

The **_for...of_** loop in JS provides a concise and straightforward way to iterate over iterable objects, such as arrays, strings, maps, sets, etc. It was introduced in ECMAScript 6 (ES6) and offers a more readable alternative to traditional for loops.

Here's the basic syntax of the for...of loop:

```js
for (variable of iterable) {
  // code to be executed
}
```

- **variable**: This is a variable that will be assigned the value of each element in the iterable for each iteration. You declare it with _let_, _const_, or _var_ (not recommended).

- **iterable**: This is the object over which the loop will iterate. It could be an array, a string, a map, a set, etc. Essentially, any object with a _Symbol.iterator_ method.

Here's how you can use for...of loop to iterate over an array:

```js
const array = [1, 2, 3, 4, 5];
for (const element of array) {
  console.log(element);
}
```

This loop will iterate over each element of the array, and in each iteration, the element variable will be assigned the value of the current element being iterated over. This makes the code concise and easy to understand.

> [!NOTE]  
> One important thing to note is that for...of loop iterates over the values of the object properties, not the keys. So if you need both keys and values, you might want to use the for...in loop for objects or entries() method for arrays.

### 1.2 :: Array.prototype

The Array prototype in JS provides a set of methods that are available to all array instances. These methods can be accessed and utilized directly on arrays to perform various operations such as adding, removing, modifying, and iterating over elements.

#### 1.2.1 :: `push`

Purpose: Used to add one or more elements to the end of an array. It returns the new length of the array
Usage: It's commonly used to append elements to an array, especially when you want to add elements dynamically.
Immutability: Modifies the original array by adding elements to the end; it doesn't create a new array.

```js
const array = [1, 2, 3];
const newLengthAfterPush = array.push(4);
console.log(newLengthAfterPush); // 4
console.log(array); // Output: [1, 2, 3, 4]
```

#### 1.2.2 :: `pop`

Purpose: Used to remove the last element from an array. It returns removed element.
Usage: Often used when you need to remove the last element of an array or when implementing a stack data structure.
Immutability: Modifies the original array by removing the last element; it doesn't create a new array.

```js
const array = [1, 2, 3];
const poppedElement = array.pop();
console.log(poppedElement); // Output: 3
console.log(array); // Output: [1, 2]
```

#### 1.2.3 :: `shift`

Purpose: Used to remove the first element from an array, shifting all subsequent elements to a lower index. It returns that element.
Usage: Typically used when you want to remove the first element of an array or when implementing a queue data structure.
Immutability: Modifies the original array by removing the first element; it doesn't create a new array.

```js
const array = [1, 2, 3];
const shiftedElement = array.shift();
console.log(shiftedElement); // Output: 1
console.log(array); // Output: [2, 3]
```

#### 1.2.4 :: `unshift`

Purpose: Used to add one or more elements to the beginning of an array. It returns the new length of the array.
Usage: Often used when you need to prepend elements to an array or when building arrays dynamically.
Immutability: Modifies the original array by adding elements to the beginning; it doesn't create a new array.

```js
const array = [2, 3];
const newLengthAfterUnshift = array.unshift(1);
console.log(newLengthAfterUnshift); // 4
console.log(array); // Output: [1, 2, 3]
```

#### 1.2.5 :: `slice`

- Purpose: Used for extracting a section of an array and returning a new array. It returns a shallow copy of a portion of an array into a new array object selected from begin (included) to end (not included).
- Usage: Primarily for creating a shallow copy of a portion of an array without modifying the original array.
- Immutability: Does not modify the original array; it creates a new array with selected elements.

```js
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(1, 4);
console.log(newArray); // Output: [2, 3, 4]
console.log(array); // Output: [1, 2, 3, 4, 5]
```

#### 1.2.6 :: `splice`

- Purpose: Used for modifying an array by removing, replacing, or adding elements. It returns an array with deleted elements.
- Usage: Can be used to remove elements, insert new elements, or replace existing elements in an array.
- Mutability: Modifies the original array directly: it does not create a new array.

```js
const array = [1, 2, 3, 4, 5];
const deletedElmenent = sarray.splice(2, 1, "a", "b");
console.log(deletedElmenent); // Output: [3]
console.log(array); // Output: [1, 2, 'a', 'b', 4, 5]
```

## 2 :: Properties and Methods

Almost all JS values have properties. The exceptions are _null_ and _undefined_.

The two main ways to access properties in JS are with a dot `.` and with square brackets `[]`. Both `user.userId` and `user[userId]` access a property in _user_, but not necessarily the same property. The difference lies in how _userId_ is interpreted. When using a dot, the word after it is the literal name of the property.

Elements in an array are stored as properties of the array, using numbers as property names. Since you can't use dot notation with numbers, and you generally want to use a binding that contains the index anyway, you must use square bracket notation to access them.

> [!NOTE]  
> Property names are text strings. They can be any string, but dot notation only works with names that look like valid variable names.

Like text strings, arrays have a length property that tells us how many elements the array has. Both string and array values contain, in addition to the _length_ property, several properties that contain function values.

Properties that contain functions are usually called _methods_ of the value they belong to.

## 3 :: Objects

Values of type `object` are arbitrary collections of properties. One way to create an object is to use curly braces as an expression. Let take this example in consideration

```js
const user = {
  id: 1,
  name: "John Doe",
};

console.log(user.id); // 1
console.log(user.name); // "John Doe"
console.log(user.age); // undefined

user.age = 24;
console.log(user.age); // 24
```

Inside the curly braces, you write a comma-separated list of properties. Each property has a name followed by a colon and a value, and indentation improves readability.

When reading a property that does not exist, you will get the value _undefined_.

It is also possible to assign a value to a property expression with the `=` operator. This will replace the value of the property if it already existed or create a new property on the object if it did not exist.

Properties whose names are not valid binding names or valid numbers must be enclosed in quotes:

```js
const user = {
  id: 1,
  name: "John Doe",
  "year of birth": 2000,
};

console.log(user["year of birth"]); // 2000
```

This means that curly braces have two meanings in JS:

- at the beginning of a statement, they begin a block of statements
- in any other position, they describe an object.

This is why parentheses must be used when implicitly returning an object via an arrow function:

```js
const createUser = () => ({
  id: 1,
  name: "John Doe",
});

const user = createUser();

/*
{
  id: 1,
  name: "John Doe",
}
*/
```

### 3.1 :: Operators

#### 3.1.1 :: `delete`

The delete operator is a unary operator that, when applied to a property of an object, will remove the named property of the object. This is not a common thing to do, but it is possible.

```js
const user = {
  id: 1,
  name: "John Doe",
};

console.log({ id: user.id }); // 1
console.log({ name: user.name }); // "John Doe"

delete user.id;

console.log({ id: user.id }); // undefined
console.log({ name: user.name }); // "John Doe"
```

#### 3.1.2 :: `in`

The binary operator `in`, when applied to a string and an object, tells you whether that object has a property with that name.

To find out what properties an object has, you can use the `Object.keys` function. When you give the function an object, it will return an array of strings: the names of the object's properties:

```js
const user = {
  id: 1,
  name: "John Doe",
};

const userKeys = Object.keys(user);

console.log(userKeys); // [ 'id', 'name' ]
```

> [!TIP]  
> Arrays, then, are just a type of object specialized for storing sequences of things. If you evaluate `typeof[]`, it will produce _object_.

## 4 :: Mutability

The value types discussed in previous chapters, such as numbers, strings, and booleans, are all immutable, but object values can be modified because they work in a different way.

When we have two numbers, for instance 1 and 1, we can consider them to be precisely the same number, whether they refer to the same physical bits or not.

With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties.

```js
const foo = 1;
const bar = 1;

console.log(foo === bar); // true

const fizz = {
  id: 1,
  name: "John Doe",
};

const buzz = {
  id: 1,
  name: "John Doe",
};

console.log(fizz === buzz); // false
```

> [!TIP]  
> Assignations can be changeable or constant, but this is independent of how their values behave. Although a const assignment to an object itself cannot be changed and will still point to the same object, the contents of that object can change.

## 5 :: Strings and properties

Values of type _string_, _number_ or _Boolean_ are not objects, so they don't actually store any property you try to add to them. As mentioned above, these values are immutable and cannot be modified.

As commented, a string primitive represents a sequence of characters enclosed within single quotes (') or double quotes ("). Here are the main properties of string primitives in JS.

- **Immutable**: Strings in JS are immutable, meaning that once they are created, their values cannot be changed. Any operation that appears to modify a string actually creates a new string.

- **Length**: Every string has a length property that indicates the number of characters in the string. This property is read-only and cannot be directly modified.

- **Character Access**: Individual characters within a string can be accessed using bracket notation ([]) with the index of the character. JS uses zero-based indexing, so the first character has an index of 0, the second character has an index of 1, and so on.

- **Concatenation**: Strings can be concatenated using the `+` operator. This operation creates a new string by combining the contents of two or more strings.

- **Substring Extraction**: JS provides methods such as `substring()`, `slice()`, and `substr()` to extract substrings from a string based on specified indices or lengths.

- **String Methods**: There are numerous built-in methods available for manipulating strings in JS, such as `toUpperCase()`, `toLowerCase()`, `trim()`, `indexOf()`, `lastIndexOf()`, `startsWith()`, `endsWith()`, `includes()`, `split()`, `replace()`, etc.

- **Escape Characters**: Strings can contain escape sequences to represent special characters such as newline (\n), tab (\t), single quote (\'), double quote (\"), backslash (\\), etc.

- **String Interpolation (Template Literals)**: JS introduced template literals, which allow embedding expressions and multiline strings directly within backticks (`). This provides a more readable and convenient way to create strings compared to traditional concatenation.

- **Unicode Support**: JS strings are UTF-16 encoded, which means they can represent characters from the Unicode character set. This allows JS to handle text in various languages and scripts.

## 6 :: The Math object

Math is a bag of number-related utility functions, such as _Math.max_ (maximum), _Math.min_ (minimum), and _Math.sqrt_ (square root). It is used as a container to group a set of related functionality. There is only one Math object and it provides a namespace so that all of these functions and values don't have to be global bindings.

> [!NOTE]  
> Having too many global bindings “pollutes” the namespace. For example, you probably want to name something _max_ in one of your programs. Since JS's built-in max function is safely protected within the `Math` object, you don't have to worry about overwriting it.

Find here a list of `Math` main methods:

- `Math.abs(x)`: returns the absolute value of a number x.
- `Math.ceil(x)`: returns the smallest integer greater than or equal to a given number x.
- `Math.floor(x)`: returns the largest integer less than or equal to a given number x.
- `Math.round(x)`: returns the value of a number x rounded to the nearest integer.
- `Math.max(x1, x2, ..., xn)`: returns the largest of zero or more numbers.
- `Math.min(x1, x2, ..., xn)`: returns the smallest of zero or more numbers.
- `Math.pow(x, y)`: returns the base x raised to the exponent y.
- `Math.sqrt(x)`: returns the square root of a non-negative number x.
- `Math.exp(x)`: returns the value of e raised to the power of x, where e is the base of the natural logarithm.
- `Math.log(x)`: returns the natural logarithm (base e) of a positive number x.
- `Math.log10(x)`: returns the base 10 logarithm of a positive number x.
- `Math.sin(x), Math.cos(x), Math.tan(x)`: returns the sine, cosine, and tangent of an angle x (in radians), respectively.
- `Math.asin(x), Math.acos(x), Math.atan(x)`: returns the arcsine, arccosine, and arctangent of a number x, respectively. The \* result is in radians.
- `Math.random()`: returns a pseudo-random number between 0 and 1 (exclusive of 1).
- `Math.floor(Math.random() * (max - min + 1)) + min`: returns a random integer between min (inclusive) and max (inclusive).

It also contains properties:

- `Math.E`: represents the base of the natural logarithm, approximately equal to 2.718.
- `Math.PI`: represents the ratio of the circumference of a circle to its diameter, approximately equal to 3.14159.

> [!NOTE]  
> By convention, constants in JS are typically named in uppercase to distinguish them from variables and to indicate that their values should not be changed. Using uppercase for constants like Math.PI helps improve code readability and maintainability by making it clear that these values are not meant to be modified. It also conforms to common coding conventions, making the code easier to understand for other developers.

## 7 :: Rest operator

The rest operator, denoted by three dots (`...`), allows you to represent an indefinite number of arguments as an array. It's particularly useful when you're working with functions that can take a variable number of arguments.

```js
function functionName(...args) {
  // 'args' is an array containing all the arguments passed to the function
  // do something with 'args'
}
```

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

## 8 :: Destructuring

Destructuring assignment allows you to extract values from arrays or properties from objects and assign them to variables concisely.

### 8.1 :: Destructuring Arrays

```js
const [a, b] = [1, 2];
// 'a' will be assigned the value 1, 'b' will be assigned the value 2
```

### 8.2 :: Destructuring Objects

```js
const { x, y } = { x: 1, y: 2 };
// 'x' will be assigned the value 1, 'y' will be assigned the value 2
```

### 8.3 :: Nested Destructuring

```js
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const {
  name,
  age,
  address: { city, country },
} = person;
// 'name' will be assigned 'John', 'age' will be assigned 30,
// 'city' will be assigned 'New York', 'country' will be assigned 'USA'
```

### 8.4 :: Destructuring + Rest operator

Combining destructuring and the rest operator it's possible to define versatile implementations that can significantly simplify your code, especially when working with complex data structures in JS.

```js
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// 'first' will be assigned 1, 'second' will be assigned 2,
// 'rest' will be an array containing [3, 4, 5]
```

```js
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
// 'a' will be assigned 1, 'b' will be assigned 2,
// 'rest' will be an object containing { c: 3, d: 4 }
```

## 9 :: JSON

JSON (_JavaScript Object Notation_) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is commonly used for transmitting data between a server and a web application, as well as for storing configuration data.

**JSON syntax is based on JS object syntax, but it is language-independent**, making it widely adopted across different programming languages.

Here's a basic example of JSON syntax:

```js
{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "isStudent": false,
  "courses": ["Math", "Science", "English"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "country": "USA"
  }
}
```

JSON allows for easy serialization and deserialization in various programming languages, making it a popular choice for data interchange between applications and systems. Take in account these details when creating a JSON object:

- The JSON data is enclosed within curly braces {}.
- Data is represented in key-value pairs.
- Keys are always strings enclosed in double quotes.
- Values can be strings, numbers, booleans, arrays, or nested JSON objects.
- Arrays are ordered collections of values.
- Nested objects can contain their own key-value pairs.

Nevertheless, pay attention to this: **JSON objects and JavaScript (JS) objects are similar in syntax but have different purposes and behaviors.**

**JSON Object:**

- JSON objects are primarily used for data interchange between a server and a web application.
- JSON is a text-based format and strictly follows a specific syntax.
- Keys and string values must be enclosed in double quotes.
- JSON does not support functions, undefined values, or comments.
- JSON is language-independent, meaning it can be used with any programming language that has a JSON parser.
- JSON.stringify() is used to serialize JavaScript objects into JSON strings, and JSON.parse() is used to deserialize JSON strings into JavaScript objects.

**JavaScript Object:**

- JS objects are used within JS code to represent structured data.
- JS objects can have keys without quotes, and string values can be enclosed in either single or double quotes.
- JS objects can contain functions, undefined values, and comments.
- JS objects are native to the JS language.
- JS objects can be created and manipulated directly within JS code using object literal syntax or constructors.
