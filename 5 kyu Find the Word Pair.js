// https://www.codewars.com/kata/5aaae0f5fd8c069e8c00016e

const compoundMatch = (arr, word) => {
  const lookup = {};
  for (let i = 0; i < arr.length; i++) {
    if (!lookup[arr[i]]) lookup[arr[i]] = i;
  }

  let firstPart;
  let secondPart;

  for (let part of arr) {
    let remainder = word.replace(part, '');
    if (remainder in lookup) {
      firstPart = part;
      secondPart = remainder;
      break;
    }
  }

  if (!firstPart || !secondPart) return null;

  if (firstPart + secondPart === word)
    return [firstPart, secondPart, [lookup[firstPart], lookup[secondPart]]];

  return [firstPart, secondPart, [lookup[secondPart], lookup[firstPart]]];
};
