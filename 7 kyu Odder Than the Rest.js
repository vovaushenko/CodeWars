// https://www.codewars.com/kata/5983cba828b2f1fd55000114
const oddOne = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return i;
    }
  }
  return -1;
};