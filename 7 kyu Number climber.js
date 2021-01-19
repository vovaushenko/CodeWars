// https://www.codewars.com/kata/559760bae64c31556c00006b/train/javascript

const climb = (n) => {
  const result = [];
  let current = n;
  while (current >= 1) {
    result.unshift(Math.floor(current));
    current = current / 2;
  }

  return result;
};
