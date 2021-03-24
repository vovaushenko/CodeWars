// https://www.codewars.com/kata/5772ded6914da62b4b0000f8

const isPalindrome = (str) => [...str].reverse().join('') === str;

const palindromePairs = (words) => {
  let indexesOfPalindromes = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (isPalindrome(`${words[i]}${words[j]}`) && i !== j) indexesOfPalindromes.push([i, j]);
    }
  }

  return indexesOfPalindromes;
};
