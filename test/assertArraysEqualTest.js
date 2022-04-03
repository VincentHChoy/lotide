const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual;
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => console.log('arrays are identical')
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => console.log('arrays are identical')
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => console.log('arrays are not identical')
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => console.log('arrays are not identical')