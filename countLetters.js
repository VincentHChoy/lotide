
const countLetters = function(sentence) {
  let output = {};
  for (const letter of sentence) {
    if (output[letter]) { // assumes it exists in the object
      output[letter]++;
    } else {
      output[letter] = 1;
    }
  }
  return output;
};

console.log(countLetters("lighthouse in the house"));