// https://www.codewars.com/kata/55983863da40caa2c900004e

const generateMap = (stringifiedNumber) => {
  const map = {};
  for (let digit of stringifiedNumber) {
    map[digit] ? map[digit]++ : (map[digit] = 1);
  }
  return map;
};

const haveSameDigits = (num1, num2) => {
  // generate hash maps
  const map1 = generateMap(num1 + '');
  const map2 = generateMap(num2 + '');
  //check in numbers are similar
  for (let key in map1) {
    if (!(key in map2)) return false;
    if (map1[key] !== map2[key]) return false;
  }
  //if we reached this point, they are indeed have same digits
  return true;
};

const nextBigger = (num) => {
  // check for inability to re-arrange
  // if we sort number in descending order and it is exactly the same as original, then we'll not be able to re-arrange it
  let digits = [...(num + '')];
  if (+digits.sort((a, b) => b - a).join('') === num) {
    return -1;
  }

  let possibleResult = num + 1;
  // loop until we'll find our number
  while (!haveSameDigits(possibleResult, num)) {
    possibleResult++;
  }
  return possibleResult;
};
