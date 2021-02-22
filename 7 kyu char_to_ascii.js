// https://www.codewars.com/kata/55e9529cbdc3b29d8c000016

const charToAscii = (str) => {
  let chars = str.replace(/[^a-zA-Z]+/g, '');
  if (!chars.length) return null;
  const map = {};

  for (let char of chars) {
    if (!(char in map)) {
      map[char] = char.charCodeAt(0);
    }
  }

  return map;
};
