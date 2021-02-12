// 916. Word Subsets
// We are given two arrays A and B of words.  Each word is a string of lowercase letters.

// Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity.  For example, "wrr" is a subset of "warrior", but is not a subset of "world".

// Now say a word a from A is universal if for every b in B, b is a subset of a.

// Return a list of all universal words in A.  You can return the words in any order.

const createHash = (str: string): any => {
  let map: any = {};
  for (let char of str) {
    map[char] ? map[char]++ : (map[char] = 1);
  }

  return map;
};

const verifyMaps = (map1: any, map2: any): any => {
  for (let key in map2) {
    if (!(key in map1)) return false;
    if (map1[key] !== map2[key]) return false;
  }

  return true;
};

const wordSubsets = (words: string[], pattern: string[]): string[] => {
  const res = [];

  for (let word of words) {
    const wordMap = createHash(word);
    let counter = 0;

    for (let p of pattern) {
      let pMap = createHash(p);

      if (verifyMaps(wordMap, pMap)) {
        counter++;
      } else {
        break;
      }
    }
    if (counter === pattern.length) {
      res.push(word);
    }
  }
  console.log(res);
  return res;
};

wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['ec', 'oc', 'ceo']);
