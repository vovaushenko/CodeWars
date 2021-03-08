// 1624. Largest Substring Between Two Equal Characters
// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

// A substring is a contiguous sequence of characters within a string.

const maxLengthBetweenEqualCharacters = (s: string): number => {
  const map: { [key: string]: number } = {};
  for (let char of s) {
    map[char] ? map[char]++ : (map[char] = 1);
  }

  let chars: { [key: string]: number[] } = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] > 1) {
      chars[s[i]] ? chars[s[i]].push(i) : (chars[s[i]] = [i]);
    }
  }

  const substrings = Object.values(chars).map(
    (indexes) => indexes[indexes.length - 1] - indexes[0] - 1
  );
  if (!substrings.length) return -1;

  return Math.max(...substrings);
};
