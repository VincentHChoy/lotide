const chai = require('chai'); // 1
const assertEqual = require('../assertEqual'); // 
const assert = chai.assert

describe("#assertEqual()", function () {
  
  it("should return not equal for non identical strings", function () {
    const actual = "Lighthouse Labs"
    const expected = "Bootcamp"
    assert.equal(assertEqual("Lighthouse Labs", "Bootcamp"),console.log(`🤔🤔🤔 Assertion Failed: ${actual} !== ${expected}`))
  });

  it("should return not equal for identical strings", function () {
    const actual = "Lighthouse Labs"
    const expected = "Lighthouse Labs"
    assert.equal(assertEqual(actual, expected),console.log(`😎😎😎 Assertion Passed: ${actual} === ${expected}`))
  });
  it("should return true for identical numbers", function () {
    const actual = 5
    const expected = 5
    assert.equal(assertEqual(actual, expected),console.log(`😎😎😎 Assertion Passed: ${actual} === ${expected}`))
  });
  it("should return true for identical numbers", function () {
    const actual = 5
    const expected = 6
    assert.equal(assertEqual(actual, expected),console.log(`🤔🤔🤔 Assertion Failed: ${actual} !== ${expected}`))
  });
  it("should return true for identical numbers", function () {
    const actual = 'six'
    const expected = 6
    assert.equal(assertEqual(actual, expected),console.log(`🤔🤔🤔 Assertion Failed: ${actual} !== ${expected}`))
  });
});