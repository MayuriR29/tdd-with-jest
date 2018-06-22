const findMultiples = require("../src/findMultiples");
test('test with input 2,6',()=>
expect(findMultiples(2,6)).toBe([2, 4, 6]));

test('test with input 2,8',()=>
expect(findMultiples(2,8)).toBe([2, 4, 6,8]));
// write test cases to ensure findMultiples() works as expected
