// 459. Repeated Substring Pattern
// iven a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

const repeatedSubstringPattern = (s: string): boolean => {
  if (s.length < 2) return false;
  for (let i = 0; i < s.length / 2; i++) {
    if (s.slice(0, i + 1).repeat(s.length / (i + 1)) === s) return true;
  }

  return false;
};
