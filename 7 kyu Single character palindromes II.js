// https://www.codewars.com/kata/5a66ea69e6be38219f000110

const isPalindrome = (str) => [...str].reverse().join('') === str;

const solve = (str) => {
  if (isPalindrome(str) && str.length % 2 === 0) return false;

  let [i, j] = [0, str.length - 1];

  while (i < j) {
    let palindomeGuess = [...str];
    palindomeGuess[i] = palindomeGuess[j];

    if (isPalindrome(palindomeGuess.join(''))) return true;
    i++;
    j--;
  }

  return false;
};
