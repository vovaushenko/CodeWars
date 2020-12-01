// https://www.codewars.com/kata/554910d77a3582bbe300009c

const getWinner = (arr) => {
  let map = {};

  for (let vote of arr) {
    map[vote] ? map[vote]++ : (map[vote] = 1);
  }

  var keyValuePairs = Object.keys(map)
    .map((key) => [key, map[key]])
    .sort((a, b) => b[1] - a[1]);
  let winner = keyValuePairs[0];

  return winner[1] > arr.length / 2 ? winner[0] : null;
};