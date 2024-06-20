# Foundations :: Values, Types & Operators

<figure style="text-align: center">

   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" alt="DOM Tree" width="100" />
   <figcaption>JavaScript</figcaption>
</figure>

## 0 :: Introduction

In the computer world, only data exists. You can read, modify, create or destroy data, but what is not data cannot be mentioned. Everything is stored as long sequences of bits.

> [!NOTE]  
> Bits are any type of two-valued thing, usually described as zeros and ones.

## 1 :: Values

Imagine a sea of bits. A typical modern computer has more than 100 billion bits in its volatile data storage (RAM). Non-volatile storage (hardware) may be even a few orders of magnitude larger.

In order to be able to work with such quantities of bits without losing them, we separate them into pieces. In a JavaScript environment, those chunks are called **values**. Although all values are made of bits, each value has a type that determines its function.

To create a value, you simply invoke its name and bam, you have it. As soon as you stop using a value, it will dissipate, leaving its bits behind to be recycled.

In JS, values can be categorized into two main types: **primitives** and **objects**. Primitives are immutable. Objects, on the other hand, are mutable and represent a collection of key-value pairs.

### 1.1 :: Empty Values

There are two special values, written null and undefined, that are used to denote the absence of a meaningful value. The difference in meaning between undefined and null is an accident of JS design, but it should be taken in account.

- The `null` value **represents the intentional absence of any object value**. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
- The `undefined` global property **represents the primitive value undefined**. It is one of JS's primitive types.

### 1.2 :: Truthy and falsy Values

A **truthy** value is a value that is considered true when encountered in a Boolean context. All values are truthy except falsy ones.

A **falsy** value is a value that is considered false when encountered in a Boolean context.

Find below main falsy values:
| Value | Type | Description |
| --- | --- | --- |
| false | `Boolean` | The keyword false |
| null | `Null` | The keyword null — the absence of any value |
| undefined | `Undefined` | undefined — the primitive value |
| NaN | `Number` | NaN — not a number |
| 0 | `Number` | The Number zero, also including 0.0, 0x0|
| -0 | `Number` | The Number negative zero, also including -0.0, -0x0|
| 0n | `BigInt` | The BigInt zero, also including 0x0n. Note that there is no BigInt negative zero — the negation of 0n is 0n|
| "" | `String` | Empty string value, also including '' and ``|

## 2 :: Types

Any operand's value has a type. As commented in section 1, type can be _object_ or can be any of the _primitive_ JS types. Objects will be treated later.

Primitive types are predefined by the language and cannot be extended in the same way that objects can be extended with additional properties and methods. The primitive types in JS are:

| type        | representation                                         | example            |
| ----------- | ------------------------------------------------------ | ------------------ |
| `string`    | represents textual data.                               | `"hello"`          |
| `number`    | represents numeric data.                               | `42`               |
| `boolean`   | represents a logical entity and cx                     | `true` or `false`  |
| `undefined` | represents an undefined value                          | `let foo`          |
| `null`      | represents the intentional absence of any object value | `const bar = null` |
| `bigint`    | represents integers of arbitrary precision             | ---                |
| `symbol`    | represents a unique identifier                         | ---                |

> [!NOTE]  
> Historically JS had only five primitive types: `string`, `number`, `boolean`, `undefined` and `null`. `symbol` was added in ECMAScript 6 (2015) and `bigint` in ECMAScript 2020.

### 2.1 :: Numbers

Values of type number are, as expected, numeric values.

```js
15;
```

JavaScript uses a fixed number of bits, 64 of them, to store a single numeric value. Similarly, given a 64 binary digit number, you can represent 264 different numbers, which is about 18 quadrillion (one 18 followed by 18 zeros). That's pretty much.

Fractional numbers are written using a dot:

```js
9.81;
```

For very large or very small numbers, you can also use scientific notation by adding an _e_ (for exponent), followed by the exponent of the number:

```js
2.998e8; //2,998 × 108 = 299,800,000.
```

#### 2.1.1 :: Arithmetic

The main thing you can do with numbers is arithmetic:

```js
8 + 2 * 5;
```

The symbols `+` and `*` are called **operators**. The first represents addition and the second represents multiplication. Placing an operator between two values will apply that operator to those values and produce a new value. The order in which they are applied is determined by the precedence of the operators.

> [!NOTE]  
> Find arithmetic operators table at section 'Operators'

#### 2.1.2 :: Special numbers

There are three special values in JS that are considered numbers but do not behave like normal numbers:

- `NaN`: defines a value as _not a number_
- `Infinity`: defines positive infinite
- `-Infinity`: defines negative infinite

### 2.2 :: Strings

Strings are used to represent text.

#### 2.2.1 :: Quotes

They are written enclosing their content in quotes.

```js
"This is a string using double quotes";
"This is a string using simple quotes";
`This is a string using backticks`;
```

> [!NOTE]  
> You can use single quotes, double quotes, or backtick marks, as long as the quotes at the beginning and end of the string match.

Strings written with single or double quotes behave very similarly. Strings between backticks, also called _template literals_, can do a few more things.

Apart from being able to span multiple lines, they can also embed other values. JS will evaluate any expression included in `${}` and it will add the resultant value as part of the string just in the same position it has been declared.

```js
`Half of 100 is ${100 / 2}`; // Half of 100 is 50
```

#### 2.2.2 :: Escaping characters

You can put almost anything in quotes to have JavaScript generate a string value from it. But some characters are special.

In order to include such characters in a string, the following notation is used: a backslash `\` within a text enclosed in quotes indicates that the subsequent character has a special meaning. This is called escaping the character.

```js
"This is the 1st line \n and this is the second";

/* 
This is the 1st line 
and this is the second
*/
```

#### 2.2.3 :: Codification

Strings must also be modeled as a series of bits. The way JavaScript does this is based on the _Unicode_ standard. This standard assigns a number to virtually every character you may need. So, if we have a number for each character, a string can be described by a sequence of numbers. And that's what JS does.

#### 2.2.4 :: Concatenation

Strings cannot be divided, multiplied, or subtracted. The `+` operator can be used in them, not to add, but to concatenate two or more strings. The following line will produce the string _"Hello Mr. Doe"_:

```js
console.log("Hello " + "Mr. " + "Doe"); // Hello Mr. Doe
```

#### 2.2.5 :: Methods

String values have a number of associated functions (methods) that can be used to perform other operations. I'll talk more about this in section 4.

### 2.3 :: Booleans

It is often useful to have a value that distinguishes between only two possibilities. For this purpose, JS has a `Boolean` type, which has only two values, **true** and **false**.

#### 2.3.1 :: Comparison

Take a look at this example:

```js
console.log(5 > 2); // true
console.log(5 < 2); // false
```

The `>` and `<` signs are binary operators. Applying them results in a Boolean value indicating whether they are true in this case.

The way the strings are sorted is roughly alphabetical but not really what you'd expect:

- uppercase letters are always “lesser” than lowercase letters, so "Z" < "a",
- non-alphabetic characters are (!, -, and so on) are also included in the sort

When comparing strings, JS loops through characters from left to right, comparing Unicode codes one by one.

There is only one value in JavaScript that is not equal to itself, and that is `NaN`.

```js
console.log(NaN == NaN); // false
```

> [!NOTE]  
> Find comparison operators table at section 'Operators'

### 2.4 :: Type coercion

When you apply an operator to the “wrong” type of value, JS will silently convert that value to the type it needs, using a set of rules that are often not what you want or expect. This is called **type coercion**.

When comparing values of the same type using the `==` operator, the result is easy to predict. What if you want to test if something refers to the precise value false? Expressions like `0 == false` and `"" == false` are also true due to automatic type conversion.

But when you do not want type conversions to occur, there are two additional operators: `===` and `!==.` The first tests whether one value is precisely equal to the other, and the second tests whether it is not precisely equal. Therefore, `"" === false` is false as expected.

> [!TIP]  
> Comparision between _null_ and _undefined_ is a clear case in JS. As commented, the `==` operator performs type coercion, meaning it tries to convert the operands to a common type before comparing them. When you use `==`, _null_ and _undefined_ are considered equal because they are both falsy values and are coerced to the same value. Therefore, `null == undefined` evaluates to true. However, the `===` operator checks both the value and the type without any type coercion. Since _null_ and _undefined_ are of different types (null is an object and undefined is undefined), `null === undefined` evaluates to false.

## 3 ::Operators

### 3.1 :: Arithmetic operators

Find below the list of main arithmetic operators:
| operator | operation | purpose | example |
| --- | --- | --- | --- |
| `+` | addition | Adds two numbers together | ` 3 + 5 >> 8` |
| `-` | subtraction | Subtracts the number on the right from the number on the left. | `4 - 2 >> 2` |
| `*` | multiplication | Multiplies two numbers together | `3 * 5 >> 15` |
| `/` | division | Divides the number on the left by the number on the right | `10 / 2 >> 5` |
| `%` | module | Returns the remainder after dividing the number on the left into whole portions of the number on the right | `10 % 2 >> 0 ` |

### 3.2 :: Comparison operators

Find below the list of main comparison operators:
| operator | operation | purpose | example |
| --- | --- | --- | --- |
| `===` | strict equal | Checks if the left and right values are identical to each other | ` 5 === 2 + 4` |
| `!==` | non-strict equal | Checks if the left and right values are not identical to each other | ` 5 !== 2 + 3` |
| `<` | Less than | Checks if the left value is less than the right | ` 10 < 6` |
| `>` | Greater than | Checks if the left value is greater than the right | ` 10 > 20` |
| `<=` | Less than or equal| Checks if the left value is less than or equal the right | ` 10 <= 6` |
| `>=` | Greater than or equal | Checks if the left value is greater than or equal the right | ` 5 >= 4` |

### 3.3 :: Logical operators

There are also some operations that can be applied to the Boolean values themselves. JS supports three logical operators: _and_, _or_, and _not_. These can be used to “reason” about Boolean values.

Find below the list of main logical operators:
| operator | operation | purpose | example |
| --- | --- | --- | --- |
| `&&` | AND | Will be `true` if and only if all the operands are true. Otherwise, it will be `false` | `1 > 0 && 2 > 0` |
| `\|\|` | OR | Will be `true` if and only if on eor more of the operands are true. Otherwise, it will be `false` | `1 < 0 \|\| 2 > 0` |
| `!` | NOT | Takes truth to falsity and vice versa. | `!(1 > 0) // false` |

### 3.4 :: Unary operators

Not all operators are symbols. This is the case of the typeof operator, which produces a string value that indicates the type of the value you provide.

```js
console.log(typeof 4.5); // 'number'
console.log(typeof "x"); // 'string'
```

The other operators shown so far in this chapter have operated on two values, but `typeof` takes only one, this is the reason why it is considered a unary operator. The minus operator can be used as both a binary operator and a unary operator.

> [!NOTE]  
> Some operators, as _minus_ (`-`), can be unary o binary, depending on the case.

!== Equal non-strict Checks if the left and right values are not identical to each other

### 3.5 :: Binary operators

Binary operators are operators that work with two operands. These operands can be variables, constants, or expressions. Binary operators perform various operations, such as arithmetic operations, logical operations, bitwise operations, and string operations, on their operands.

Common binary operators are:

- Arithmetic Operators
- Comparison Operators
- Logical Operators
- String Concatenation

### 3.6 :: Ternary operators

Ternary operators are operators that take three operands, hence the name "ternary." In JS, the most commonly used ternary operator is the conditional (ternary) operator, which has the following syntax:

```js
console.log(10 > 5 ? "10 is greater than 5" : "10 is not greater than 5"); // Outputs: "x is greater than 5"
```

The condition `10 > 5` is evaluated. Since 10 is greater than 5, the condition is true:

- Therefore, the expression "10 is greater than 5" is returned.
- Otherwise, the expression "10 is not greater than 5" should be returned.

### 3. :: Short-circuit

In JS, short-circuiting refers to the behavior of logical operators (`&&` and `||`) where the second operand may not be evaluated if the result of the operation can be determined by evaluating the first operand alone. This behavior can optimize code execution and prevent unnecessary evaluations.

#### 3..1 :: Short-circuiting with Logical AND (&&)

In an expression using &&, if the left operand evaluates to false, the expression short-circuits, and the right operand is not evaluated because the overall result will be false regardless of the right operand's value.
If the left operand evaluates to true, the expression continues and the right operand is evaluated. The overall result of the && expression is the value of the right operand.

```js
console.log(5 < 2 && 10 > 5); // Short-circuit occurs because (5 < 2) is false >> outputs: false
```

#### 3..2 :: Short-circuiting with Logical OR (||):

In an expression using ||, if the left operand evaluates to true, the expression short-circuits, and the right operand is not evaluated because the overall result will be true regardless of the right operand's value.
If the left operand evaluates to false, the expression continues and the right operand is evaluated. The overall result of the || expression is the value of the right operand.

```js
console.log(5 > 2 || 10 < 5); // Short-circuit occurs because (5 > 2) is true >> outputs: true
```

> [!TIP]  
> Short-circuiting can be useful for writing concise and efficient code, especially when dealing with conditional expressions where the evaluation of subsequent expressions depends on the result of preceding ones. However, it's important to understand the implications of short-circuiting and ensure that it aligns with the intended logic of your code.
