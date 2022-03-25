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

