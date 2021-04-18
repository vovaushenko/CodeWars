// https://www.codewars.com/kata/530d0298e09e54a3620006c2

Number.prototype.palindromeBelow = function (base) {
  const num = this;
  const changeBase = (n) => n.toString(base);
  const isPalindrome = (n) => [...n].reverse().join('') === n;
  const result = [];
  for (let i = 1; i < num; i++) {
    if (isPalindrome(changeBase(i))) {
      result.push(i);
    }
  }

  return result;
};
