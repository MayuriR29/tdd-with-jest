const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

test('test array with two elements',()=>
expect(firstNonConsecutiveNumber([1, 3])).toBe(3));

test('test array with positive numbers',()=>
expect(firstNonConsecutiveNumber([1, 2, 4, 5, 6])).toBe(4));
  
test('test array negative numbers',()=>
expect(firstNonConsecutiveNumber([-1, 0, 1, -10])).toBe(-10));

test('test array consecutive numbers',()=>
expect(firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6])).toBe(null));