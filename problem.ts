// 821. Shortest Distance to a Character

// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

const shortestToChar = (s: string, c: string): number[] => {
  const res = [];

  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    counter++;
    if (s[i] === c) {
      counter = 0;
      console.log(i);
    }
    res[i] = counter;
  }

  counter = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    counter++;
    if (s[i] === c) counter = 0;
    res[i] = Math.min(counter, res[i]);
  }

  return res;
};

console.log(shortestToChar('loveleetcodeaaaaa', 'e'));
