// https://www.codewars.com/kata/557a2c136b19113912000010

const reverseIt = (input) => {
  if (typeof input !== 'string' && typeof input !== 'number') return input;

  return typeof input === 'string'
    ? [...input].reverse().join('')
    : Number([...(input + '')].reverse().join(''));
};