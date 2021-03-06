// 1624. Largest Substring Between Two Equal Characters
// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

// A substring is a contiguous sequence of characters within a string.

const maxLengthBetweenEqualCharacters = (s: string): number => {
  const map: { [key: string]: any } = {};

  for (let char of s) {
    map[char] ? map[char]++ : (map[char] = 1);
  }

  let res: any = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] > 1) {
      res[s[i]] ? res[s[i]].push(i) : (res[s[i]] = [i]);
    }
  }

  let largestSubstring = 0;

  for (let key in res) {
    res[key].sort((a: any, b: any) => b - a);
  }
  return 1;
};

maxLengthBetweenEqualCharacters('cabbac');
