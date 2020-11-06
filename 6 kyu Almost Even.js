// https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b

const splitInteger = function (num, parts) {
  const smallPart = Math.floor(num / parts);
  const biggerPart = Math.ceil(num / parts);
  let sum = 0;
  let solution = [];

  // lets do this recusrively
  const helper = (n) => {
    if (n === 0) {
      return;
    }
    if (n % biggerPart === 0 && n !== num) {
      n = n - biggerPart;
      solution.push(biggerPart);
    } else {
      n = n - smallPart;
      solution.push(smallPart);
    }

    helper(n);
  };
  helper(num);
  return solution;
};
