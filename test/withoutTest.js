const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

//TEST CASES

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // => ["hello", "world"]
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


