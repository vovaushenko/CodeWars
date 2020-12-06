// https://www.codewars.com/kata/552ab0a4db0236ff1a00017a

const sillycase = (str) => {
  let mid = Math.ceil(str.length / 2);
  let left = str.slice(0, mid);
  let right = str.slice(mid);

  return left.toLowerCase() + right.toUpperCase();
};
