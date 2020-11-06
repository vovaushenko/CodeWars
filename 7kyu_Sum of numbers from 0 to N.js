//www.codewars.com/kata/56e9e4f516bcaa8d4f001763

function SequenceSum(num) {
  if (num < 0) {
    return `${num}<0`;
  }
  let sum = 0;
  let sol = [];
  for (let i = 0; i <= num; i++) {
    sum += i;
    sol.push(i);
  }
  let solution = sol.join('+');
  solution += `=${sum}`;
  return solution;
}

console.log(SequenceSum(0));
