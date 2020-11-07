// https://www.codewars.com/kata/576bb3c4b1abc497ec000065

const compare = (s1, s2) => {
  if (s1 === null || s2 === null) {
    return true;
  }
  if (s1.length === 0 || s2.length === 0) {
    return true;
  }
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < s1.length; i++) {
    sum1 += s1.charCodeAt(i);
  }
  for (let j = 0; j < s2.length; j++) {
    sum2 += s2.charCodeAt(j);
  }

  if (sum1 === sum2) {
    return true;
  }
  //let rule out the case of single content but different cases
  let map1 = {};
  let map2 = {};
  for (let char of s1) {
    map1[char.toLowerCase()]
      ? map1[char.toLowerCase()]++
      : (map1[char.toLowerCase()] = 1);
  }
  for (let char of s2) {
    map2[char.toLowerCase()]
      ? map2[char.toLowerCase()]++
      : (map2[char.toLowerCase()] = 1);
  }

  for (let key in map1) {
    if (!(key in map2)) {
      return false;
    } else if (map1[key] !== map2[key]) {
      return false;
    }
  }

  return true;
};

console.log(compare('!!', '7476'));
