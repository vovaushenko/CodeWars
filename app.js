<<<<<<< HEAD
// https://www.codewars.com/kata/523f5d21c841566fde000009

const arrayDiff = (arr1, arr2) => {
  if (arr1.length === 0) {
    return [];
  }
  if (arr2.length === 0) {
    return arr1;
  }

  let map1 = {};
  let map2 = {};

  for (let num of arr1) {
    map1[num] ? map1[num]++ : (map1[num] = 1);
  }
  for (let num of arr2) {
    map2[num] ? map2[num]++ : (map2[num] = 1);
  }
  console.log(map1);
  console.log(map2);
  let sol = [];

  for (let key in map1) {
    if (!(key in map2)) {
      for (let i = 0; i < map1[key]; i++) {
        sol.push(key);
      }
    }
  }
  return sol.map(Number);