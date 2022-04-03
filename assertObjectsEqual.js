// IMPORTING EQ OBJECTS AND THE FUNCTIONS IT CALLS BACK
const eqObjects = require('./eqObjects.js');
  
//IMPLMENTING ASSERT OBJECTS EQUAL

const assertObjectsEqual =  function(object1, object2) {
  const inspect = require('util').inspect; // <= add this line
  let same = eqObjects(object1,object2);
  same = same === true ? `✅✅✅ Assertion Passed: {${inspect(object1)} === ${inspect(object2)}` : `🚫🚫🚫 Assertion Failed: {${inspect(object1)} !== ${inspect(object2)}`;
  return console.log(same);
};

module.exports = assertObjectsEqual;