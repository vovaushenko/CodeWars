const areAnagrams = (word1, word2) => [...word1].sort().join('') === [...word2].sort().join('');

const groupAnagrams = (words) => {
  const output = [];
  const currentAnagrams = {};
  const helper = (w) => {
    if (w.length === 0) return;
    let anagrams = [];
    if (!currentAnagrams[[...w[0]].sort().join('')]) {
      for (word of w) {
        if (areAnagrams(word, w[0])) {
          anagrams.push(word);
        }
      }
    }

    currentAnagrams[[...w[0]].sort().join('')] = true;
    if (anagrams.length) {
      output.push(anagrams);
    }

    helper(w.slice(1));
  };
  helper(words);

  return output;
};
