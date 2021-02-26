// 1408. String Matching in an Array
// Given an array of string words. Return all strings in words which is substring of another word in any order.

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

const stringMatching = (words: string[]): string[] => {
  let matchingSubstrings: any = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].includes(words[i]) && !matchingSubstrings.includes(words[i]))
        matchingSubstrings.push(words[i]);
    }
  }
  console.log(matchingSubstrings);
  return matchingSubstrings;
};
