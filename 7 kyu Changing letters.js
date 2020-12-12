// https://www.codewars.com/kata/5831c204a31721e2ae000294

const swap = (str) => {
  let vowels = 'aeiouAEIOU';
  return str
    .split('')
    .map((a) => (vowels.includes(a) ? a.toUpperCase() : a))
    .join('');
};
