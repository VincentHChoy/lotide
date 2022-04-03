const without = function(array,remove) {

  let withoutArray = array;
  for (let i = 0; i < remove.length; i++) { //loops through the remove array
    //filters everything that is NOT a match and reassigns the without array
    withoutArray = withoutArray.filter(element => element !== remove[i]);
  } return withoutArray;
};

module.exports = without;
