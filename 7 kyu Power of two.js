// https://www.codewars.com/kata/534d0a229345375d520006a0

const isPowerOfTwo = (num) => {
  if (num == 1) {return true};
  if (num == 0) {return false}
  if (num === 2) {
    return true;
  }
  if (num % 2 !== 0) {
    return false;
  }

  return isPowerOfTwo(num / 2);
};
