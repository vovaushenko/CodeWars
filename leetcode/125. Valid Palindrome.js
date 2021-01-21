// 125. Valid Palindrome

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

const isPalindrome = (s) => {
  if (!s) return true;
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return s === [...s].reverse().join('');
};
