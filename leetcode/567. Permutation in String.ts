// 567. Permutation in String
// Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

const arePermutations = (s1: string, s2: string): boolean => {
  const map1: { [key: string]: number } = {};
  const map2: { [key: string]: number } = {};
  for (let char of s1) {
    map1[char] ? map1[char]++ : (map1[char] = 1);
  }
  for (let char of s2) {
    map2[char] ? map2[char]++ : (map2[char] = 1);
  }

  for (let key in map1) {
    if (!(key in map2)) return false;
    if (map1[key] !== map2[key]) return false;
  }

  return true;
};

const checkInclusion = (s1: string, s2: string): boolean => {
  if (s2.includes(s1)) return true;
  if (s2.length < s1.length) return false;
  const patternLength = s1.length;

  for (let i = 0; i < s2.length; i++) {
    if (arePermutations(s1, s2.slice(i, patternLength + i))) return true;
  }

  return false;
};
