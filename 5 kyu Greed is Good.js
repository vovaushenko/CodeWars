// https://www.codewars.com/kata/5270d0d18625160ada0000e4

const score = (dice) => {
  let map = {};
  for (let num of dice) map[num] ? map[num]++ : (map[num] = 1);

  let result = 0;
  for (let key in map) {
    if (key === '1') {
      map[key] >= '3' ? (result += (map[key] - 3) * 100 + 1000) : (result += map[key] * 100);
    }
    if (key === '6' && map[key] >= 3) result += 600;
    if (key === '5') {
      map[key] >= '3' ? (result += (map[key] - 3) * 50 + 500) : (result += map[key] * 50);
    }
    if (key === '4' && map[key] >= 3) result += 400;
    if (key === '3' && map[key] >= 3) result += 300;
    if (key === '2' && map[key] >= 3) result += 200;
  }

  return result;
};