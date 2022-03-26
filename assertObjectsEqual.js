// IMPORTING EQ OBJECTS AND THE FUNCTIONS IT CALLS BACK

  //modifed eqArrays to account for the difference in lengths
  const eqArrays = function (array1, array2) {
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
  
  

  const sortKeys = function (initialObject) { // sorts objects by key
    const sorted = Object.keys(initialObject)
      .sort()
      .reduce((prevValue, currentValue) => {
        prevValue[currentValue] = initialObject[currentValue]
        return prevValue
      },
        {}
      )
    return sorted
  }
  
  
  
  
  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
  const eqObjects = function (object1, object2) {
    object1 = sortKeys(object1)
    object2 = sortKeys(object2)
    let obj1Keys = Object.keys(object1); // puts all object keys into an array and flattens in case of arrays, and sorts
    let obj2Keys = Object.keys(object2);
    // let obj1Values = Object.values(object1); //puts all object arrays into, and flattens in case of arrays, and sorts
    // let obj2Values = Object.values(object2);
    console.log(obj1Keys);
    console.log(obj2Keys);
    // console.log(obj1Values);
    // console.log(obj2Values);
    let equal = true;
    // check for arrays
    if (eqArrays(obj1Keys, obj2Keys)) { // compare array of keys
      
      console.log(`keys match`);
      // console.log(eqArrays(obj1Values, obj2Values));
      for (const key in object1) {
        // console.log(object1[key])
        // console.log(object2[key])
        // console.log(Array.isArray(object1[key]))
        
        if (Array.isArray(object1[key])) {
          console.log('comparing arrays')
          eqArrays(object1[key],object2[key]) ? object1 : equal = false
          if (!equal) { // breaks out of loop if the arrays don't match
            break
          }
          continue
        }
        if (object1[key] !== object2[key]) {
          console.log('hello')
          return false
        }
      }
    }
    return equal;
  };
  
  
//IMPLMENTING ASSERT OBJECTS EQUAL

const assertObjectsEqual =  function(object1, object2) {
    const inspect = require('util').inspect; // <= add this line
    console.log(`Example label: ${inspect(actual)}`);
    let same = eqObjects(object1,object2);
    same = same === true ? 'objects are identical' : 'objects are not identical';
    return console.log(same);
  };
  
  