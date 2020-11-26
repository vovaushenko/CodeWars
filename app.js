// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd

const mygcd = (...arr) => {
  arr = arr.sort((a, b) => b - a);
  for (let i = arr[1]; i > 0; i--) {
    if (arr[0] % i == 0 && arr[1] % i == 0) {
      return i;
    }
  }
};

// 30/12 12/12 30/11  12/ 11  30/10 12/10

mygcd(12, 30);
