// https://www.codewars.com/kata/5569b10074fe4a6715000054

const count = (arr) => {
  let map = {};
  for (let element of arr) {
    map[element] ? map[element]++ : (map[element] = 1);
  }
  return map;
};
