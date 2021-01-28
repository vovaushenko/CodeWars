// https://www.codewars.com/kata/55f81f9aa51f9b72a200002f

const findUnique = (nums) => {
  let map = {};
  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  for (let key in map) {
    if (map[key] === 1) return +key;
  }
};
