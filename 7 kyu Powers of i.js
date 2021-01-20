// https://www.codewars.com/kata/5a97387e5ee396e70a00016d

const pofi = (n) => {
  if (n === 0) return '1';
  if (n === 1) return 'i';

  if ((n / 2) % 1 == 0 && (n / 2) % 2 === 0) return '1';
  if ((n / 2) % 1 == 0 && (n / 2) % 2 !== 0) return '-1';

  return ((n - 1) / 2) % 2 == 0 ? 'i' : '-i';
};
