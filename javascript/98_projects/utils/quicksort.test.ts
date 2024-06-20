import { describe, expect, test } from "bun:test";

import quickSort from "./quicksort";

describe("quicksort", () => {
  const EXPECTED = {
    EMPTY_COLLECTION: [],
    SORTED_NUMBERS_COLLECTION: [1, 2, 3, 4, 5],
    SORTED_STRINGS_COLLECTION: [
      "ADA",
      "BUZZ",
      "FIZZ",
      "JOHN",
      "ada",
      "buzz",
      "fizz",
      "john",
    ],
  };

  const emptyCollection: any[] = [];

  describe("given a collection of numbers", () => {
    const unorderedCollection = [5, 3, 4, 1, 2];

    test("when method is called with an empty collection of numbers then empty array should be returned", () => {
      const sortedCollection = quickSort(emptyCollection);
      expect(sortedCollection).toEqual(EXPECTED.EMPTY_COLLECTION);
    });

    test("when method is called with an unordered collection of numbers then sorted array should be returned", () => {
      const sortedCollection = quickSort(unorderedCollection);
      expect(sortedCollection).toEqual(EXPECTED.SORTED_NUMBERS_COLLECTION);
    });
  });

  describe("given a collection of strings", () => {
    const unorderedCollection = [
      "FIZZ",
      "fizz",
      "buzz",
      "ADA",
      "JOHN",
      "BUZZ",
      "john",
      "ada",
    ];

    test("when method is called with an empty collection of numbers then empty array should be returned", () => {
      const sortedCollection = quickSort(emptyCollection);
      expect(sortedCollection).toEqual(EXPECTED.EMPTY_COLLECTION);
    });

    test("when method is called with an unordered collection of numbers then sorted array should be returned", () => {
      const sortedCollection = quickSort(unorderedCollection);
      expect(sortedCollection).toEqual(EXPECTED.SORTED_STRINGS_COLLECTION);
    });
  });
});
