# ARROW FUNCTION

## Benefits

### Aesthetics

Functions can be defined in a more aesthetic way
It's easy to read

### binding with `this`

Arrow functions don't create own execution scope. This will always point to upper lexical scope. This is usefull for callback, so they don't mostly create any kind of binding.

```javascript
const me = {
  name: "John Doe",
  callMe() {
    setTimeout(() => {
      console.log("My name is " + this.name);
    }, 1000);
  },
};
me.callMe(); /// My name is John Doe
```

## Drowbacks

### Arguments

Arrow functions have no defined arguments

```javascript
const sayHello = function () {
  console.log(arguments);
  return "Hello";
};
sayHello("John", "Doe", 1, 2, 3); //'John' 'Doe' 1 2 3
```

```javascript
const sayHello = () => {
  console.log(arguments);
  return "Hello";
};
sayHello("John", "Doe", 1, 2, 3); //ReferenceError: arguments is not defined
```

### Named function

Arrow function can not be directly named. It should be assigned to a constant.

```javascript
function sayHello() {
  return "Hello";
}
console.log(sayHello()); //Hello
```

```javascript
sayHello() => {
  return "Hello";
};
console.log(sayHello()); //Uncaught SyntaxError: Malformed arrow function parameter list
```

### Class constructor

Arrow function can not be used to declare a class constructor

```javascript
function Person(n) {
  this.name = n;
}
const person = new Person("foo");
person.name; // foo
```

```javascript
const Person = (n) => {
  this.name = n;
};
const foo = new Person("foo");
foo.name; // TypeError: Person is not a constructor
```

### Event listeners

Client binds event listeners callback to DOM element.

```javascript
document.body.addEventListener("click", function () {
  console.log(this);
});
//on Click :: dom element or event ref
```

```javascript
document.body.addEventListener("click", () => {
  console.log(this);
});
//on Click :: Window
```

## Recap

Don't use arrow functions with

- Object methods
- Constructors
- Prototypes
- Event handlers
