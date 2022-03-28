
// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual.js')


const findKeyByValue = function(object, prop) {
  let i = 0;
  for (const key in object) {
    if (object[key] === prop) {
      return key;
    }
  }
  i++;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre,"The Expanse"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);