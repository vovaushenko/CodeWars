// https://www.codewars.com/kata/55d410c492e6ed767000004f

const vowel2index = (str) =>
  [...str].map((char, id) => ('aeiouAEIOU'.includes(char) ? id + 1 : char)).join('');
