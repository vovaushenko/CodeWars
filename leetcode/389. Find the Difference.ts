// 389. Find the Difference

// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

interface HashMap {
  [key: string]: number;
}

const generateMap = (str: string): HashMap => {
  const map: HashMap = {};
  for (let char of str) {
    map[char] ? map[char]++ : (map[char] = 1);
  }
  return map;
};

const findTheDifference = (s1: string, s2: string): string => {
  const map1 = generateMap(s1);
  const map2 = generateMap(s2);

  for (let key in map2) {
    if (!(key in map1)) return key;
    if (map2[key] !== map1[key]) return key;
  }

  return '';
};