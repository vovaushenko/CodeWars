// https://www.codewars.com/kata/5274e122fc75c0943d000148

const groupByCommas = (num) => {
  num = num + '';
  if (num.length <= 3) return num;
  let res = [];

  let counter = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    counter++;
    res.push(num[i]);
    if (counter === 3 && i !== 0) {
      res.push(',');
      counter = 0;
    }
  }

  return [...res.join('')].reverse().join('');
};