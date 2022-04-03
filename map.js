const assertArraysEqual = require('./assertArraysEqual.js');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};

module.exports = map


//test cases
// assertArraysEqual(map(words,word => word[0]),['g','c','t','m','t'])
// assertArraysEqual(map(words,word => word.toUpperCase()),['GROUND','CONTROL','TO','MAJOR','TOM'])
// assertArraysEqual(map(words,word => word + ' dog'),["ground dog", "control dog", "to dog", "major dog", "tom dog"])