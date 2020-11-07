// https://www.codewars.com/kata/5939ab6eed348a945f0007b2

const longestWord = (s) => {
  let arr = s.split(' ');
  arr.sort((a, b) => a.length - b.length);
  return arr[arr.length - 1];
};
