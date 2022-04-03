//TEST CODE
const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

const ab = { b: "1", a: ["1", 2] };
const ba = { a: ["1", 2], b: "1" };
// console.log(eqObjects(ab, ba)); // => true
assertObjectsEqual(ab,ba);
  
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true
  
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
  