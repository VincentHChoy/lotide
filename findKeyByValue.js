
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // comparing the two inputs and assiging result the outcome
  let result = actual === expected ? `😎😎😎 Assertion Passed: ${actual} === ${expected}` : `🤔🤔🤔 Assertion Failed: ${actual} !== ${expected}`;
  return result;
};


const findKeyByValue = function (object, prop) {
  var i = 0;
  for (const key in object) {
    if (object[key] === prop) {
      return key
    }
  }
  i++
}


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre,"The Expanse"))
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));