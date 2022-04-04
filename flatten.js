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

module.exports = flatten;

