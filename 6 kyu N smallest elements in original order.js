// https://www.codewars.com/kata/5aec1ed7de4c7f3517000079

const firstNSmallest = (arr, n) => {
  const nSmallest = [...arr].sort((a, b) => a - b).slice(0, n);
  const map = {};

  for (let num of nSmallest) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  let result = [];

  let i = 0;
  while (result.length < n) {
    if (nSmallest.includes(arr[i]) && map[arr[i]]) {
      map[arr[i]]--;
      result.push(arr[i]);
    }
    i++;
  }

  return result;
};
