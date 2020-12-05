// https://www.codewars.com/kata/5a9e86705ee396d6be000091

const checkThreeAndTwo = (arr) => {
  let map = {};
  for (let el of arr) {
    map[el] ? map[el]++ : (map[el] = 1);
  }
  let frequencies = Object.values(map);
  if (!frequencies.includes(3)) return false;
  if (!frequencies.includes(2)) return false;
  return true;
};