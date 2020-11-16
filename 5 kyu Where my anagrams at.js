const anagrams = (word, words) => {
  let wordSorted = [...word].sort().join('');
  // now lets of words in our array
  let sortedWords = words.map((word) => [...word].sort().join(''));
  // lets loop through words and find indexes of anagrams
  let anagramIds = [];
  sortedWords.forEach((element, id) => {
    if (element === wordSorted) {
      anagramIds.push(id);
    }
  });
  // lets return our solution with anagrams
  let solution = [];
  for (let i = 0; i < anagramIds.length; i++) {
    solution.push(words[anagramIds[i]]);
  }

  return solution;
};
