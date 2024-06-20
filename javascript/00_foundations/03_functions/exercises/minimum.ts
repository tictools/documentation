/**
 * Math.min is a standard function that returns its smallest passed argument.
 * Define the function 'min' that takes two arguments and returns their minimum.
 */

function min(value1: number, value2: number): number {
  const isFirstValueMinorOrEqual = value1 <= value2;
  return isFirstValueMinorOrEqual ? value1 : value2;
}
