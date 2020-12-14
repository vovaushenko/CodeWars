// https://www.codewars.com/kata/58ba6fece3614ba7c200017f

const palindrome = (num) => {
  if (typeof num !== 'number' || num < 0) return 'Not valid';
  let pal = Number([...(num + '')].reverse().join(''));

  return pal == num;
};
