// https://www.codewars.com/kata/566044325f8fddc1c000002c

const evenChars = (str) => {
  if (str.length < 2 || str.length > 100) {
    return 'invalid string';
  }
  let solution = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 0) {
      solution.push(str[i]);
    }
  }

  return solution;
};
