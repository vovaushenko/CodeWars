// https://www.codewars.com/kata/5b4070144d7d8bbfe7000001

const numericals = (str) => {
  let map = {};
  let result = "";

  for (let char of str) {
    map[char] ? map[char]++ : (map[char] = 1);

    result += map[char];
  }

  return result;
};
