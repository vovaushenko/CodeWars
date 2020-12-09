// https://www.codewars.com/kata/554ca54ffa7d91b236000023

const deleteNth = (arr, n) => {
  let map = {};
  for (let num of arr) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  console.log(map);
  for (let key in map) {
    if (map[key] > n) map[key] = n;
  }
  console.log(map);

  let solution = [];
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] > 0) {
      map[arr[i]]--;
      solution.push(arr[i]);
    }
  }
  return solution;
};