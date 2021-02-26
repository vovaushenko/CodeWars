// https://www.codewars.com/kata/54e2213f13d73eb9de0006d2

const pairZeros = (arr, flag) => {
  let res = [];
  let zeroCounter = 0;
  for (let num of arr) {
    if (num !== 0) res.push(num);

    if (num === 0) {
      zeroCounter++;
      if (zeroCounter % 2 !== 0) res.push(num);
    }
  }

  return res;
};
