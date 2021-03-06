// Import
const eqArrays = require('./eqArrays.js');

//IMPLEMENT FUNCTIONS
const sortKeys = function(initialObject) { // sorts objects by key
  const sorted = Object.keys(initialObject)
    .sort() //[a,b,c,d]
    .reduce((prevValue, currentValue) => {
      prevValue[currentValue] = initialObject[currentValue]; //inital value is an empty object {}, so {}.a = initalobject.a
      return prevValue;
    },
    {} // inital object
    );
  return sorted;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  object1 = sortKeys(object1);
  object2 = sortKeys(object2);
  let obj1Keys = Object.keys(object1); // puts all object keys into an array
  let obj2Keys = Object.keys(object2);
  let equal = true;
  // check for arrays
  if (eqArrays(obj1Keys, obj2Keys)) { // compare array of keys
    
    // console.log(`keys match`);
    for (const key in object1) {
      
      if (Array.isArray(object1[key])) {
        // console.log('comparing arrays');
        eqArrays(object1[key],object2[key]) ? object1 : equal = false;
        if (!equal) { // breaks out of loop if the arrays don't match
          break;
        }
        continue;
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return equal;
};

module.exports = eqObjects;