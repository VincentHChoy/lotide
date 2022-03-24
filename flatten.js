const flatten = function(array) {
  return array.join().split(',').map(x => Number(x)); // joins the array into a string seperated by commas, split will put each element into an array with the comman being the delimiter, and map will convert each string into a number

};
console.log([1, 2, 3, 4, 5, 6]);

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]


