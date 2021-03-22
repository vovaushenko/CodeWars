const wordSubsets = (words: string[], pattern: string[]): string[] => {
  const res = [];
  const patternHash = pattern.map((p) => generateHashMap(p));

  for (let word of words) {
    const wordMap = generateHashMap(word);
    if (patternHash.every((h) => isValidWord(wordMap, h))) res.push(word);
  }

  return res;
};

const generateHashMap = (str: string): any => {
  let map: { [key: string]: number } = {};
  for (let char of str) {
    map[char] ? map[char]++ : (map[char] = 1);
  }

  return map;
};

const isValidWord = (wordMap: any, patternMap: any): boolean => {
  for (let key in patternMap) {
    if (!(key in wordMap)) return false;
    if (wordMap[key] < patternMap[key]) return false;
  }

  return true;
};

console.log(wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['e', 'o']));
