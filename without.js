// FUNCTION IMPORT
const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')
const assertArraysEqual =  require('./assertArraysEqual')


const without = function(array,remove) {

  let withoutArray = array;
  for (let i = 0; i < remove.length; i++) { //loops through the remove array
    //filters everything that is NOT a match and reassigns the without array
    withoutArray = withoutArray.filter(element => element !== remove[i]);
  } return withoutArray;
};

module.exports = without


//TEST CASES

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


// // Make sure the original array was not altered by the without function
// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // => ["hello", "world"]
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);


