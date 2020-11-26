// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd

const mygcd = (...arr) => {
  arr = arr.sort((a, b) => b - a);
  for (let i = arr[1]; i > 0; i--) {
    if (arr[0] % i == 0 && arr[1] % i == 0) {
      return i;
    }
  }
};
