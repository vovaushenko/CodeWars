// 1422. Maximum Score After Splitting a String
// Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.
const maxScore = (s) => {
  let score = 0;
  let leftScore, rightScore;
  for (let i = 1; i < s.length; i++) {
    leftScore = [...s.slice(0, i)].filter((num) => num === '0').length;
    rightScore = [...s.slice(i)].filter((num) => num === '1').length;

    score = Math.max(score, leftScore + rightScore);
  }
  return score;
};

maxScore('1111');
