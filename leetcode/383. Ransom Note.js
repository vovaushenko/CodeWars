// 383. Ransom Note

// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

const canConstruct = (ransomNote, magazine) => {
  const ransHash = generateHashMap(ransomNote);
  const magHash = generateHashMap(magazine);
  for (let char of ransomNote) {
    if (!(char in magHash)) return false;
    if (magHash[char] < ransHash[char]) return false;
  }

  return true;
};

const generateHashMap = (str) => [...str].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
