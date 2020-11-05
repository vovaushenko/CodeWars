// https://www.codewars.com/kata/5b162ed4c8c47ea2f5000023

const solve = (num) => {
  let max = 0;
  let sol;
  for (let i = 1; i <= num; i++) {
    let sum = 0;

    let number = String(i);
    for (let char of number) {
      sum += parseInt(char);
    }

    if (sum >= max) {
      max = sum;
      sol = i;
    }
  }
  return sol;
};

solve(48);
