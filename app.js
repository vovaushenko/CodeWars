// https://www.codewars.com/kata/52180ce6f626d55cf8000071

const strToHash = (str) =>
  str.length
    ? str.split(',').reduce((h, pair) => {
        const [char, frequency] = pair.split('=');
        h[char.trim()] = +frequency;
        return h;
      }, {})
    : {};

console.log(strToHash('a=1, b=2, c=3, d=4'));
