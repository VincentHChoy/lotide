//IMPORTING ASSERT EQUAL
const assertEqual = function(actual, expected) {
  // comparing the two inputs and assiging result the outcome
  let result = actual === expected ? `😎😎😎 Assertion Passed: ${actual} === ${expected}` : `🤔🤔🤔 Assertion Failed: ${actual} !== ${expected}`;
  return result;
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item);
    // inside the loop,
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.

    if (results[item]) { //same as results.item, if it exists we will add to it
      results[item]++;
    } else {
      results[item] = 1;
    }
  }


  return results;
};

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