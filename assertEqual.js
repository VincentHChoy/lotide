// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // comparing the two inputs and assiging result the outcome
  let result = actual === expected ? `😎😎😎 Assertion Passed: ${actual} === ${expected}` : `🤔🤔🤔 Assertion Failed: ${actual} !== ${expected}`;
  return console.log(result);
};

module.exports = assertEqual


// TEST CODE
// console.log(assertEqual("Lighthouse Labs", "Bootcamp")); // non identical strings
// console.log(assertEqual("Bootcamp", "Bootcamp")); // indentical strings
// console.log(assertEqual(1, 1));  // identical numbers
// console.log(assertEqual(1, 5)); // non identical numbers
// console.log(assertEqual(1, '1'));  // one number and one string
