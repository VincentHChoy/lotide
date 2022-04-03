const takeUntil = function(array, callback) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return results;
    } else {
      results.push(array[i]);
    }
  }
  return results;
};

module.exports = takeUntil;