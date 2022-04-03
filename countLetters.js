const countLetters = function(sentence) {
  sentence = sentence.split('').filter(x => x !== ' ');
  console.log(sentence);
  let output = {};
  for (const letter of sentence) {
    if (output[letter]) { // assumes it exists in the object
      output[letter]++;
    } else  {
      output[letter] = 1;
    }
  }
  return output;
};

module.exports = countLetters

// console.log(countLetters("lighthouse in the house"));