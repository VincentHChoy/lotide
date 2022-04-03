//importing
const assertArraysEqual = require('../assertArraysEqual');


const letterPositions = require('../letterPositions');



let test = 'lighthouse in the house';
console.log(letterPositions(test));
assertArraysEqual(letterPositions(test).i, [1,11]);