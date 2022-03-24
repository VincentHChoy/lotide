// TEST/ASSERTION FUNCTIONS
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

// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length <= 2) {
    return 'please provide an array with 3 or more elements';
  }
  let start = 0, end = array.length - 1 ,middle;
  let average = (start + end) / 2;
  if (array.length % 2 !== 0) {
    middle = [array[Math.floor(average)]];
    
  } else {
    middle = [array[Math.floor(average)],array[Math.ceil(average)],];
  }
  return middle;
};


// console.log(eqArrays(middle([1,2,3,4]),[ 1, 2, 3, 4]))
assertArraysEqual(middle([1,2,3,4]),[ 1, 2, 3, 4]);
assertArraysEqual(middle([ 1, 2, 3, 4]),[2,3]);
assertArraysEqual(middle([ 1, 2, 3, 4, 5]),[3]);