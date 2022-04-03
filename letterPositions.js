const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  for (const letter of sentence) {
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
    i++;
  }
  delete results[' '];
  return results;
};

module.exports = letterPositions;