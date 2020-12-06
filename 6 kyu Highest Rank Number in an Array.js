// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

const highestRank = (arr) => {
  let map = {};
  for (let num of arr) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  let maxFrequency = Math.max(...Object.values(map));

  let mostFrequent = [];
  for (let key in map) {
    if (map[key] === maxFrequency) mostFrequent.push(key);
  }
  return Number(mostFrequent[mostFrequent.length - 1]);
};