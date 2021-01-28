// https://www.codewars.com/kata/54eee76e7f9142f0cd001270

const solution = (arr) => {
  let map = {};

  for (let num of arr) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  let duplicate;
  for (let key in map) {
    if (map[key] == 2) {
      duplicate = +key;
    }
  }
  let missing;
  let keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i + 1] - keys[i] > 1) missing = +keys[i] + 1;
  }
  if (!missing && +keys[0] === 2) return [1, duplicate];

  return [missing || +keys[keys.length - 1] + 1, duplicate];
};

console.log(solution([2, 2]));
