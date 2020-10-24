// https://www.codewars.com/kata/5f77d62851f6bc0033616bd8

const validSpacing = (s) => {
  //check for 0 and last index of s and ruled out empty string as well
  if (s[0] === ' ' || s[s.length - 1] === ' ') return false;

  //loop through string and check for double spaces
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ' ' && s[i + 1] === ' ') {
      return false;
    }
  }
  return true;
};
