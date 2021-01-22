// 318. Maximum Product of Word Lengths
// Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

const haveDifferentLetters = (word1, word2) => {
  for (let char of word1) {
    if (word2.includes(char)) return false;
  }
  return true;
};

const maxProduct = (words) => {
  let maxProduct = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (haveDifferentLetters(words[i], words[j])) {
        maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
      }
    }
  }

  return maxProduct;
};

console.log(maxProduct(['a', 'aa', 'aaa', 'aaaa']));
