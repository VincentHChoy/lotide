// Import
const assertEqual = function(actual, expected) {
  // comparing the two inputs and assiging result the outcome
  let result = actual === expected ? `😎😎😎 Assertion Passed: ${actual} === ${expected}` : `🤔🤔🤔 Assertion Failed: ${actual} !== ${expected}`;
  return result;
};
//modifed eqArrays to account for the difference in lengths
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

//Import Flatten
const flatten = function(array) {

  return array.join().split(',').map(x => {

    if (x == Number(x)) { // using double equals on purpose to get the loosely comparasion
      return Number(x);
    }
    return x;
  }
  );
};
console.log(flatten([1, 2, [3, 4], 'dog', [6]])); // => [1, 2, 3, 4, 'dog', 6]




//IMPLEMENT FUNCTIONS

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let obj1Keys = flatten(Object.keys(object1)).sort(); // puts all object keys into an array and flattens in case of arrays, and sorts
  let obj2Keys = flatten(Object.keys(object2)).sort();
  let obj1Values = flatten(Object.values(object1)).sort(); //puts all object arrays into, and flattens in case of arrays, and sorts
  let obj2Values = flatten(Object.values(object2)).sort();
  console.log(obj1Keys);
  console.log(obj2Keys);
  console.log(obj1Values);
  console.log(obj2Values);
  console.log(`comparing object values flattened ${eqArrays(obj1Values, obj2Values)}`);

  // check for arrays


  if (eqArrays(obj1Keys, obj2Keys)) { // compare array of keys
    console.log(`keys match`);
    console.log(eqArrays(obj1Values, obj2Values));
    if (eqArrays(obj1Values, obj2Values)) { // compare array of values
      return true;
    }
  }

  return false;
};


const ab = { a: ["1", 2], b: "2" };
const ba = { a: ["1", 2], b: "2" };
console.log(eqObjects(ab, ba)); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false