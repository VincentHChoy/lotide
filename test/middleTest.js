const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays")
const middle = require("../middle.js")


console.log(eqArrays(middle([1,2,3,4]),[ 1, 2, 3, 4]))
assertArraysEqual(middle([1, 2, 3, 4]), [1, 2, 3, 4]); // fail
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // pass