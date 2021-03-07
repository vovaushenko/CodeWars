// 58. Length of Last Word
// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

const lengthOfLastWord = (s: string): number => {
  const words = s.split(' ').filter((word) => word);
  return words.length ? words[words.length - 1].length : 0;
};
