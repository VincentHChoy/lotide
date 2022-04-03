//importing
const assertArraysEqual = require('./assertArraysEqual')


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

module.exports = letterPositions


// let test = 'lighthouse in the house';

// console.log(letterPositions(test));
// assertArraysEqual(letterPositions(test).i, [1,11]);