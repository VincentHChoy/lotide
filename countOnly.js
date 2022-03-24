// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
//IMPLEMENTATION
//COMPARE THE PROPERTIES IN THE OBJECT WITH ARRAY AND SEE IF THEY MATCH
//IF THEY MATCH WE SHOULD PUSH IT TO A NEW OBJECT WITH THE FINAL COUNTS
// use binary search? we have a value we want to fin



// my implementation
// const countOnly = function (allItems, itemsToCount) {
//   let filteredItemsToCount = [];
//   let final = {};
//   for (const props in itemsToCount) { //filters out the names that don't have the true property
//     if (itemsToCount[props]) {
//       filteredItemsToCount.push(props)
//     }
//   }

//   for (let i = 0; i < filteredItemsToCount.length; i++) { // create the object with a place holder of 0
//     // console.log(filteredItemsToCount[i])
//     final[filteredItemsToCount[i]] = 0
//   }


//   for (let i = 0; i < allItems.length; i++) {           // nested for loop, loops through allItems array and compares each one to the filtered list from the first for loop
//     for (let j = 0; j < filteredItemsToCount.length; j++) {
//       if (allItems[i] === filteredItemsToCount[j]) {
//         final[filteredItemsToCount[j]]++
//       }   
//     }
//   }

//   return final
// }

//IMPORTING ASSERT EQUAL
const assertEqual = function (actual, expected) {
  // comparing the two inputs and assiging result the outcome
  let result = actual === expected ? `😎😎😎 Assertion Passed: ${actual} === ${expected}` : `🤔🤔🤔 Assertion Failed: ${actual} !== ${expected}`;
  return result;
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {}

  for (const item of allItems) {
    console.log(item);
    // inside the loop, 
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.

    if (results[item]) { //same as results.item, if it exists we will add to it
      results[item]++
    } else{
      results[item] = 1
    }
  }


  return results
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));





