// FUNCTION IMPLEMENTATION
const eqArrays =  function(array1, array2) {
  let i = 0;
  let same = true;
  while (same && i < array1.length) {
    // console.log(assertEqual(array1[i], array2[i]))
    same = array1[i] === array2[i] ? same : false;
    i++;
  }
  return same;
};



const assertArraysEqual =  function(array1, array2) {
  let same = eqArrays(array1,array2);
  same = same === true ? 'arrays are identical' : 'arrays are not identical';
  return console.log(same);
};

module.exports = assertArraysEqual;

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

