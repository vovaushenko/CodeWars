// https://www.codewars.com/kata/54da5a58ea159efa38000836

const findOdd = (arr) => {
  let map = {};

  for (num of arr) {
    map[num] ? map[num]++ : (map[num] = 1);
  }
  for (let key in map) {
    if (map[key] % 2 !== 0) {
      return Number(key);
    }
  }
};
