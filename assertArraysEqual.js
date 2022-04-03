// FUNCTION IMPLEMENTATION
const eqArrays =  require('./eqArrays.js')


const assertArraysEqual =  function(array1, array2) {
  let same = eqArrays(array1,array2);
  same = same === true ? 'arrays are identical' : 'arrays are not identical';
  return console.log(same)
};

module.exports = assertArraysEqual;


