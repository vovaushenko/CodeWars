// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d

function halvingSum(m) {
  let solution = 0;
  for (i = m; i >= 1; i = Math.floor(i / 2)) {
    solution += i;
  }
  return solution;
}
