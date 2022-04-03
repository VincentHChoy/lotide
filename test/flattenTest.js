const flatten = require('../flatten');
console.log(flatten([1, 2, [3, 4], 'dog', [6]])); // => [1, 2, 3, 4, 'dog', 6]

