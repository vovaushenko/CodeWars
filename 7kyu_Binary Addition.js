// https://www.codewars.com/kata/551f37452ff852b7bd000139

const addBinary = (a1, a2) => {
  let sum = a1 + a2;
  let res = "";

  let binaryMaker = (num) => {
    if (num === 0) {
      return;
    }

    if (num % 2 !== 0) {
      res += 1;
    } else {
      res += 0;
    }
    binaryMaker(Math.floor(num / 2));
  };

  binaryMaker(sum);
  return [...String(res)].reverse().join("");
};

console.log(addBinary(11, 14));
