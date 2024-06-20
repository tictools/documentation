/**
 * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
 * For numbers divisible by 3, print "Fizz" instead of the number.
 * For numbers divisible by 5 (and not 3), print "Buzz" instead.
 * For numbers that are divisible by both 3 and 5, print "FizzBuzz".
 */
function fizzBuzzWithDoWhile() {
  let number = 1;

  do {
    switch (true) {
      case number % 3 === 0 && number % 5 === 0: {
        console.log("Fizzbuzz");
        break;
      }
      case number % 3 === 0: {
        console.log("Fizz");
        break;
      }
      case number % 5 === 0: {
        console.log("Buzz");
        break;
      }
      default: {
        console.log(number);
      }
    }

    number++;
  } while (number <= 100);
}

fizzBuzzWithDoWhile();
