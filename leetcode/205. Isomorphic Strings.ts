// https://leetcode.com/problems/isomorphic-strings/

const isIsomorphic = (s: string, t: string): boolean => {
  const lookup: { [key: string]: string } = {};

  for (let i = 0; i < s.length; i++) {
    if (!lookup[s[i]]) {
      if (Object.values(lookup).includes(t[i])) return false;
      lookup[s[i]] = t[i];
    }
    if (lookup[s[i]] !== t[i]) return false;
  }

  return true;
};
