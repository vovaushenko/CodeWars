// 409. Longest Palindrome

const longestPalindrome = (s: string): number => {
  if (s.length === 1) return 1;
  const map: { [key: string]: number } = {};
  for (let char of s) {
    map[char] ? map[char]++ : (map[char] = 1);
  }

  const frequencies = Object.values(map);
  let result = 0;

  for (let i = 0; i < frequencies.length; i++) {
    if (frequencies[i] % 2 == 0) {
      result += frequencies[i];
      frequencies[i] = 0;
    }
    if (frequencies[i] > 1 && frequencies[i] % 2 !== 0) {
      result += frequencies[i] - 1;
      frequencies[i] = 1;
    }
  }

  if (frequencies.includes(1)) result += 1;

  return result;
};
