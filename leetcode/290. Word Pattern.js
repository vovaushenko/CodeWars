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
