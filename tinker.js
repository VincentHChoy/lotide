// const sortKeys = function (initialObject){ // sorts objects by key
//   sorted = Object.keys(initialObject) // sorts by keys alphabetically
//     .sort()   //[a,b,c,d]
//     .reduce(function (previousValue, currentValue) {
//       // console.log(currentValue)
//       // console.log(previousValue)
//         previousValue[currentValue] = initialObject[currentValue]; // initial value of empty object, emptyobject.a = notSorted.a => object.b = notsorted.b
//         return previousValue;
//     }, {});             // intial value is an empty object
// return sorted
// }
// notSorted = {b: false, a: true, c:1, d:15};

//IMPLEMENT FUNCTIONS
const sortKeys = function (initialObject) { // sorts objects by key
  const sorted = Object.keys(initialObject)
    .sort()
    .reduce((prevValue, currentValue)=>{
      prevValue[currentValue] = initialObject[currentValue]
      return prevValue
    },
      {}
    )
return sorted
}
notSorted = { b: false, a: true, c: 1, d: 15 };

console.log(sortKeys(notSorted))