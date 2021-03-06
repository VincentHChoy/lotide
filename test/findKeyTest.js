const assertEqual = require('../assertEqual');
const findKey = require('../findKey');


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),'noma'); // => "noma"

let users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};


console.log(findKey(users,o => o.age < 40 && o.active === true));
// => 'barney'
console.log(findKey(users,o => o.age < 35 && o.active === true));
// => pebbles

