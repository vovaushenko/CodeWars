// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

const scramble = (str1, str2) => {
  let mapOne = {};
  for (let char of str1) mapOne[char] ? mapOne[char]++ : (mapOne[char] = 1);

  let mapTwo = {};
  for (let char of str2) mapTwo[char] ? mapTwo[char]++ : (mapTwo[char] = 1);

  for (let key in mapTwo) {
    if (!mapOne[key]) return false;
    if (mapOne[key] < mapTwo[key]) return false;
  }
  return true;
};
