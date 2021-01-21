// 557. Reverse Words in a String III
// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

const reverseWords = (s) =>
  s
    .split(' ')
    .map((word) => [...word].reverse().join(''))
    .join(' ');
