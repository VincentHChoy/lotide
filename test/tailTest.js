const tail = require("../tail");
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;


describe("tail", () => {
  it("returns true for tail([1,2,3,4]) === [2, 3, 4]", () => {
    const actual = tail([1, 2, 3, 4]);
    const expected = [2, 3 , 4];
    assert.isTrue(eqArrays(actual, expected));
  });
  it("returns false for tail([1,2,3,4]) === [2, 3]", () => {
    const actual = tail([1, 2, 3, 4]);
    const expected = [2, 3 ];
    assert.isFalse(eqArrays(actual, expected));
  });
  it("returns false for tail([1,2,3,4]) === []", () => {
    const actual = tail([1, 2, 3, 4]);
    const expected = [];
    assert.isFalse(eqArrays(actual, expected));
  });
});



console.log(tail([0,1,2,3,4,5]));