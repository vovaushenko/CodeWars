// https://www.codewars.com/kata/559e10e2e162b69f750000b4

const dominator = (arr) => {
  let map = {};
  for (let num of arr) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  let dominatingPower;
  for (let key in map) {
    if (map[key] > arr.length / 2) {
      dominatingPower = Number(key);
    }
  }
  return dominatingPower || -1;
};