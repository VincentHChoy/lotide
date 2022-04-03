const assertArraysEqual = require('../assertArraysEqual.js');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];


//TEST CASES
assertArraysEqual(map(words,word => word[0]),['g','c','t','m','t']);
assertArraysEqual(map(words,word => word.toUpperCase()),['GROUND','CONTROL','TO','MAJOR','TOM']);
assertArraysEqual(map(words,word => word + ' dog'),["ground dog", "control dog", "to dog", "major dog", "tom dog"]);