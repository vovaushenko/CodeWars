// https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  console.log(arr);
  let map = {};

  for (number of arr) {
    map[number] ? map[number]++ : (map[number] = 1);
  }

  for (key in map) {
    if (map[key] === 1) {
      unique = key;
    }
  }
  return Number(unique);
}
