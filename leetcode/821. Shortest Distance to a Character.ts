// 821. Shortest Distance to a Character
// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

const shortestToChar = (s: string, c: string): number[] => {
  let result: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      result.push(0);
      continue;
    }
    let pointer1 = i - 1;
    let pointer2 = i + 1;

    while (true) {
      if (s[pointer1] === c) {
        result.push(Math.abs(i - pointer1));
        break;
      }
      if (s[pointer2] === c) {
        result.push(Math.abs(i - pointer2));
        break;
      }
      if (pointer1 > 0) pointer1--;
      if (pointer2 < s.length) pointer2++;
    }
  }

  return result;
};

console.log(shortestToChar('loveleetcode', 'e'));
