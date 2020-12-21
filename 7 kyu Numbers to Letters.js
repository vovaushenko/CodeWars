// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c

const switcher = (numbers) => {
  const ALPHABET = 'zyxwvutsrqponmlkjihgfedcba!? ';

  return numbers.map((num) => ALPHABET[num - 1]).join('');
};
