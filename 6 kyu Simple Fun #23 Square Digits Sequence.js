// https://www.codewars.com/kata/5886d65e427c27afeb0000c1

const squareDigitsSequence = (num) => {
  if (num == 1) return 2;
  let combinations = [num];
  let numbreOfCalls = 0;
  const helper = (n) => {
    let squaresSum = [...(n + '')].reduce((total, a) => total + a ** 2, 0);
    if (combinations.includes(squaresSum) && numbreOfCalls) return;
    numbreOfCalls++;
    combinations.push(squaresSum);
    helper(squaresSum);
  };

  helper(num);

  return numbreOfCalls + 2;
};
