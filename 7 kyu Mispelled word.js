// https://www.codewars.com/kata/5892595f190ca40ad0000095

const mispelled = (wrd1, wrd2) => {
  if (Math.abs(wrd1.length - wrd2.length) > 1) {
    return false;
  }
  let map1 = {};
  let map2 = {};
  for (let char of wrd1) {
    map1[char] ? map1[char]++ : (map1[char] = 1);
  }
  for (let char of wrd2) {
    map2[char] ? map2[char]++ : (map2[char] = 1);
  }

  let counterOfDifference = 0;
  for (let key in map1) {
    if (!(key in map2)) {
      counterOfDifference++;
    }
  }
  return counterOfDifference > 1 ? false : true;
};
