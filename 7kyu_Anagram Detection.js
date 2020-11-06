// https://www.codewars.com/kata/529eef7a9194e0cbc1000255

const isAnagram = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }
  console.log(word1, word2);
  console.log(word1.length, word2.length);
  let map1 = {};
  let map2 = {};

  for (let char of word1) {
    map1[char.toLowerCase()]
      ? map1[char.toLowerCase()]++
      : (map1[char.toLowerCase()] = 1);
  }
  for (let char of word2) {
    map2[char.toLowerCase()]
      ? map2[char.toLowerCase()]++
      : (map2[char.toLowerCase()] = 1);
  }
  console.log(map1);
  console.log(map2);

  // lets compare maps , if they're identical we have an anagram
  for (let key in map1) {
    if (!(key in map2)) {
      return false;
    } else if (map2[key] !== map1[key]) {
      return false;
    }
  }

  return true;
};
