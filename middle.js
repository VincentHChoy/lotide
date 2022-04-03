// ACTUAL FUNCTION
const middle = function (array) {
  if (array.length <= 2) {
    return 'please provide an array with 3 or more elements';
  }
  let start = 0, end = array.length - 1, middle;
  let average = (start + end) / 2;
  if (array.length % 2 !== 0) {
    middle = [array[Math.floor(average)]];

  } else {
    middle = [array[Math.floor(average)], array[Math.ceil(average)],];
  }
  return middle;
};

module.exports = middle;


