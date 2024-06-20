/**
 * We can use % (the remainder operator) to test whether a number is even or odd by using %2.
 * Here’s another way to define whether a positive whole number is even or odd:
 *    Zero is even.
 *    One is odd.
 *    For any other number N, its evenness is the same as N - 2.
 *
 * Define a recursive function 'isEven' corresponding to this description.
 * The function should accept a single parameter (a positive, whole number) and return a Boolean.
 */

function isEven(value: number): boolean {
  if (value === 0) return true;
  if (value === 1) return false;

  return isEven(value - 2);
}
