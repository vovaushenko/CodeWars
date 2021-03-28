// https://www.codewars.com/kata/58e2708f9bd67fee17000080

const isPalindrome = (n) => +[...(n + '')].reverse().join('') === n && String(n) !== 1;

const palindrome = (num) => {
  if (typeof num !== 'number' || num < 0) return 'Not valid';
  const digits = [...(num + '')];
  const palindromeStash = [];

  for (let i = 0; i < digits.length; i++) {
    let tempNum = digits[i];
    for (let j = i + 1; j < digits.length; j++) {
      tempNum += digits[j];
      if (isPalindrome(+tempNum) && !palindromeStash.includes(+tempNum) && digits[i] !== '0') {
        palindromeStash.push(+tempNum);
      }
    }
  }

  return palindromeStash.length ? palindromeStash.sort((a, b) => a - b) : 'No palindromes found';
};
