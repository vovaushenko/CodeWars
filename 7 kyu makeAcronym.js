// https://www.codewars.com/kata/557efeb04effce569d000022

const makeAcronym = (str) => {
  if (!str) return '';
  if (typeof str !== 'string') return 'Not a string';
  if (str.replace(/\D+/g, '')) return 'Not letters';

  return str
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
};
