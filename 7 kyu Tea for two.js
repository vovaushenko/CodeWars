// https://www.codewars.com/kata/555a7dc335d4c407af00006e

const tea42 = (input) => {
  if (typeof input === 'number') input = input + '';

  return input.replace(/2/g, 't');
};