// 2 problems 7-6
// https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript

const solve = (arr) => {
  for (let num of arr) {
    if (!arr.includes(-num)) {
      return num;
    }
  }
};

console.log(solve([1, -1, 2, -2, 3]));
