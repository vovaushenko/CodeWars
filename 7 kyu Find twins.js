// https://www.codewars.com/kata/5834315e06f227a6ac000099

const elimination = (arr) => {
  const map = {};
  for (let num of arr) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  for (let key in map) {
    if (map[key] === 2) return Number(key);
  }

  return null;
};
