// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // comparing the two inputs and assiging result the outcome
  let result = actual === expected ? `😎😎😎 Assertion Passed: ${actual} === ${expected}` : `🤔🤔🤔 Assertion Failed: ${actual} !== ${expected}`;
  return result;
};

const eqArrays =  function(array1, array2) {
  let i = 0;
  let same = true;
  while (same && i < array1.length) {
    // console.log(assertEqual(array1[i], array2[i]))
    same = array1[i] === array2[i] ? same : false;
    i++;
  }
  return same
};



const assertArraysEqual =  function(array1, array2) {
  var same = eqArrays(array1,array2)
  same = same === true ? 'arrays are identical' : 'arrays are not identical'
  return console.log(same)
};

const without = function(array,remove){

  var withoutArray = array
  for (let i = 0; i < remove.length; i++) { //loops through the remove array 
    //filters everything that is NOT a match and reassigns the without array
    withoutArray = withoutArray.filter (element => element !== remove[i])  
  } return withoutArray
}


//TEST CASES

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]


// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // => ["hello", "world"]
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


