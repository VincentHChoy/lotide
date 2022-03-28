// sum all number in array recursively

const array = [2,4,6];

const sumNumbers = function(array,output = []) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sumNumbers(array.slice(1));
  }
};


const countNumbers = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return 1 + countNumbers(array.slice(1));
  }
};

console.log(sumNumbers(array));
console.log(countNumbers(array));