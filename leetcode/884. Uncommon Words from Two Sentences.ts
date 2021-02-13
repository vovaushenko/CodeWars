// 884. Uncommon Words from Two Sentences
// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Return a list of all uncommon words.

// You may return the list in any order.

const uncommonFromSentences = (s1: string, s2: string): string[] => {
  const a1 = s1.split(' ');
  const a2 = s2.split(' ');

  const uncommonWords: string[] = [];

  for (let word of a1) {
    if (a1.filter((w) => w === word).length === 1 && !a2.includes(word)) {
      uncommonWords.push(word);
    }
  }
  for (let word of a2) {
    if (a2.filter((w) => w === word).length === 1 && !a1.includes(word)) {
      uncommonWords.push(word);
    }
  }

  return uncommonWords;
};

uncommonFromSentences('apple apple', 'banana');
