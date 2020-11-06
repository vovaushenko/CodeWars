// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

const gimme = (arr) => {
  let sorted = [...arr].sort((a, b) => a - b);
  let mid = sorted[1];

  return arr.indexOf(mid);
};
