// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // comparing the two inputs and assiging result the outcome
  let result = actual === expected ? `😎😎😎 Assertion Passed: ${actual} === ${expected}` : `🤔🤔🤔 Assertion Failed: ${actual} !== ${expected}`;
  return result;
};

const eqArrays = function(array1, array2) {
  let i = 0;
  let same = true;
  while (same && i < array1.length) {
    // console.log(assertEqual(array1[i], array2[i]))
    same = array1[i] === array2[i] ? same : false;
    i++;
  }
  return same;
};



eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS