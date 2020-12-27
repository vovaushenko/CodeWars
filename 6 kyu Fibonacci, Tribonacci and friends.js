// https://www.codewars.com/kata/fibonacci-tribonacci-and-friends

const Xbonacci = (signature, n) => {
  if (n < signature.length) return signature.slice(0, n);
  
  
  let solution = [];
  solution = solution.concat(signature);
  let i = 0;

  while (solution.length < n) {
    let temp = solution.slice(i, solution.length);
    solution.push(temp.reduce((a, b) => a + b, 0));
    i++;
  }

  return solution;
};