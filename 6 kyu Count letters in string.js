// https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d
const letterCount = (s) => {
  let map = {};
  for (let char of s) {
    map[char] ? map[char]++ : (map[char] = 1);
  }

  return map;
};
