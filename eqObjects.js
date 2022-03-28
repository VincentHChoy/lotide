// Import
const eqArrays = require('./eqArrays.js');


//IMPLEMENT FUNCTIONS
const sortKeys = function(initialObject) { // sorts objects by key
  const sorted = Object.keys(initialObject)
    .sort()
    .reduce((prevValue, currentValue) => {
      prevValue[currentValue] = initialObject[currentValue];
      return prevValue;
    },
    {}
    );
  return sorted;
};
notSorted = { b: false, a: true, c: 1, d: 15 };




// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  object1 = sortKeys(object1);
  object2 = sortKeys(object2);
  let obj1Keys = Object.keys(object1); // puts all object keys into an array and flattens in case of arrays, and sorts
  let obj2Keys = Object.keys(object2);
  let equal = true;
  // check for arrays
  if (eqArrays(obj1Keys, obj2Keys)) { // compare array of keys
    
    console.log(`keys match`);
    for (const key in object1) {
      
      if (Array.isArray(object1[key])) {
        console.log('comparing arrays');
        eqArrays(object1[key],object2[key]) ? object1 : equal = false;
        if (!equal) { // breaks out of loop if the arrays don't match
          break;
        }
        continue;
      }
      if (object1[key] !== object2[key]) {
        console.log('hello');
        return false;
      }
    }
  }
  return equal;
};

module.exports = eqObjects;


// const ab = { b: "1", a: ["1", 2] };
// const ba = { a: ["1", 2], b: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false