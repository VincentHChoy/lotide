const findKeyByValue = function(object, prop) {
  for (const key in object) {
    if (object[key] === prop) {
      return key;
    }
  }
};

module.exports = findKeyByValue;