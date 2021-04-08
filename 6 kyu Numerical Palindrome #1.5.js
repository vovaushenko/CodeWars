// https://www.codewars.com/kata/58e09234ca6895c7b300008c

const isPalindrome = (n) => (n > 9 ? [...(n + '')].reverse().join('') * 1 === n : false);

const palindrome = (start, s) => {
  if (typeof start !== 'number' || typeof s !== 'number' || start < 0 || s < 0) return 'Not valid';
  let res = [];

  while (res.length < s) {
    if (isPalindrome(start)) res.push(start);
    start++;
  }
  return res;
};
