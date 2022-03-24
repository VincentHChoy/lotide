const eqArrays = function(array1, array2) {
  let i = 0;
  let same = true;
  while (same && i < array1.length) {
    // console.log(assertEqual(array1[i], array2[i]))
    same = array1[i] === array2[i] ? same : false;
    i++;
  }
  return same;
};

const assertArraysEqual = function(array1, array2) {
  let same = eqArrays(array1, array2);
  same = same === true ? 'arrays are identical' : 'arrays are not identical';
  return console.log(same);
};


const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  for (const letter of sentence) {
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
    i++;
  }
  delete results[' '];
  return results;
};

let test = 'lighthouse in the house';

console.log(letterPositions(test));
assertArraysEqual(letterPositions(test).i, [1,11]);