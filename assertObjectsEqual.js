// IMPORTING EQ OBJECTS AND THE FUNCTIONS IT CALLS BACK
const eqObjects = require('./eqObjects.js');
  
//IMPLMENTING ASSERT OBJECTS EQUAL

const assertObjectsEqual =  function(object1, object2) {
  const inspect = require('util').inspect; // <= add this line
  let same = eqObjects(object1,object2);
  same = same === true ? `✅✅✅ Assertion Passed: {${inspect(object1)} === ${inspect(object2)}` : `🚫🚫🚫 Assertion Failed: {${inspect(object1)} !== ${inspect(object2)}`;
  return console.log(same);
};

module.exports = assertObjectsEqual

  
// const ab = { b: "1", a: ["1", 2] };
// const ba = { a: ["1", 2], b: "1" };
// // console.log(eqObjects(ab, ba)); // => true
// assertObjectsEqual(ab,ba);
  
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
  
// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
  