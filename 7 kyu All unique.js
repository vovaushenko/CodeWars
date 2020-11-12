// https://www.codewars.com/kata/553e8b195b853c6db4000048

const hasUniqueChars = (str) => {
  console.log(str);
  let map = {};
  for (let char of str) {
    map[char.toLowerCase()] ? map[char]++ : (map[char] = 1);
  }

  for (let key in map) {
    if (map[key] > 1) {
      return false;
    }
  }

  return true;
};
