const assert = require('chai').assert;
const middle = require("../middle.js")
const eqArrays = require("../eqArrays")

describe("#middle", () => {
  it("returns true for equal for actual:[1,2,3,4]  expected:[2,3]", () => {
    const actual = middle([1, 2, 3, 4])
    const expected = [2, 3]
    assert.isTrue(eqArrays(actual, expected))
  });

  it("returns false for arrays of unequal size and content", () => {
    const actual = middle([1, 2, 3, 4])
    const expected = [2, 3, 4]
    assert.isFalse(eqArrays(actual, expected))
  });
  it("returns false for unequal actual:[1, 2, 3, 4, 5] expected:[3]", () => {
    const actual = middle([1, 2, 3, 4, 5])
    const expected = [3]
    assert.isTrue(eqArrays(actual, expected))
  });

});