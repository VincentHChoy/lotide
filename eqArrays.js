// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  let i = 0;
  let same = true;
  const largerLength = array1 > array2 ? array1.length : array2.length;
  while (same && i < largerLength) {
    // console.log(assertEqual(array1[i], array2[i]))
    same = array1[i] === array2[i] ? same : false;
    i++;
  }
  return same;
};

module.exports = eqArrays;

