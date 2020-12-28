// https://www.codewars.com/kata/525f039017c7cd0e1a000a26

const palindromeChainLength = (n) => {
  if (isPalindrome(n)) return 0;
  let steps = 0;

  const helper = (number) => {
    if (isPalindrome(number)) return;
    steps++;
    number += reverseNumber(number);
    helper(number);
  };

  helper(n);
  return steps;
};

function reverseNumber(num) {
  return Number([...(num + '')].reverse().join(''));
}

function isPalindrome(num) {
  return Number([...(num + '')].reverse().join('')) === num;
}

console.log(palindromeChainLength(87));
