// https://www.codewars.com/kata/5a092d9e46d843b9db000064

const solve = (arr) => {
  for (let num of arr) {
    if (!arr.includes(-num)) {
      return num;
    }
  }
};
