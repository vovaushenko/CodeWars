// https://www.codewars.com/kata/599febdc3f64cd21d8000117

const numbers = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  0: 'zero',
};

const numToStr = (num) => [...(num + '')].map((digit) => numbers[digit]).join('');

const numbersOfLetters = (num) => {
  let current = numToStr(num);
  let path = [current];

  while (numbers[current.length] !== current) {
    if (current.length > 9) {
      current = numToStr(current.length);
    } else {
      current = numbers[current.length];
    }
    path.push(current);
  }

  return path;
};
