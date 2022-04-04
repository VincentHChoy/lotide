const flatten = function(array, output = []) {
  for (let i = 0; i < array.length; i++) { //base case is when it stops looping
    if(Array.isArray(array[i])){
      flatten(array[i],output)// recursive case, uses the output in the first function as the new output for when it enters array
    }
    else{
      output.push(array[i])

    }
  } 

  return output
};

console.log(flatten([1, 2, [3, '4'],'dog', [6]])); // => [1, 2, 3, '4', 'dog', 6]

// console.log([1,2].concat([3,'4']))

module.exports = flatten;

