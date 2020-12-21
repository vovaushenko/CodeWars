// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c

const switcher = (numbers) => {
  // const ALPHABET = ' abcdefghijklmnopqrstuvwxyz!? ';
  const ALPHABET = 'zyxwvutsrqponmlkjihgfedcba!? ';

  return numbers.map((num) => ALPHABET[num - 1]).join('');
};

console.log(switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4']));
