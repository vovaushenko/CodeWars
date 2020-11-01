// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
  let map = {};
  for (char of string) {
    map[char] ? map[char]++ : (map[char] = 1);
  }
  return map;
}
