// https://www.codewars.com/kata/558dd9a1b3f79dc88e000001

const findDup = (arr) => {
  let map = {};

  for (let num of arr) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  for (let key in map) {
    if (map[key] == 2) {
      return Number(key)
    }
  }
};
