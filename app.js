// https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3

const duplicates = (arr) => {
  let map = {};
  for (let num of arr) {
    map[num] ? map[num]++ : (map[num] = 1);
  }
  let frequencies = Object.values(map);

  let duplicatesCounter = frequencies
    .filter((a) => a >= 2)
    .map((a) => Math.floor(a / 2))
    .reduce((total, _) => total + _, 0);
  
  return duplicatesCounter;
};

duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2, 2]);
