// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

const multiplicationTable = (num) => {
  const solution = [];

  const helper = (n) => {
    if (n > num) {
      return;
    }
    let row = [];
    for (let i = 1; i <= num; i++) {
      row.push(n * i);
    }
    solution.push(row);
    helper(n + 1);
  };

  helper(1);

  return solution;
};
