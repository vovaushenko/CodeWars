// 290. Word Pattern

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

const wordPattern = (pattern, s) => {
  const words = s.split(' ');

  if (words.length !== pattern.length) return false;

  const map = {};
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    if (!map[char]) {
      if (Object.values(map).includes(words[i])) return false;
      map[char] = words[i];
    } else {
      if (map[char] !== words[i]) return false;
    }
  }

  return true;
};

console.log(wordPattern('aaa', 'aa aa aa aa'));
