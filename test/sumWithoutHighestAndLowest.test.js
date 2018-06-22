const sumWithoutHighestAndLowest = require("../src/sumWithoutHighestAndLowest.js");

test("test array with positive inputs ", () => {
  expect(sumWithoutHighestAndLowest([5, 10, 8])).toBe(8);
});

test("test array with negative inputs", () => {
  expect(sumWithoutHighestAndLowest([5, 10, 8, -1])).toBe(13);
});

test("test array with zero as one of the value", () => {
  expect(sumWithoutHighestAndLowest([5, 10, 2, 0])).toBe(7);
});
