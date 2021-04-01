// 686. Repeated String Match
// Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. If it is impossible for b​​​​​​ to be a substring of a after repeating it, return -1.

// Notice: string "abc" repeated 0 times is "",  repeated 1 time is "abc" and repeated 2 times is "abcabc".

const repeatedStringMatch = (a: string, b: string): number => {
  if (a.includes(b)) return 1;
  if (!b.includes(a)) return -1;

  let regex = new RegExp(a, 'gi');

  while (!a.includes(b)) {
    a += a;
  }
  console.log(a);
  let count = (a.match(regex) || []).length;

  return count;
};

console.log(repeatedStringMatch('abcd', 'cdabcdab'));
