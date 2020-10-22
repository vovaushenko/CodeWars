//https://www.codewars.com/kata/59f08f89a5e129c543000069

function dup(s) {
  let bigStr = s.join(' ');

  let p1 = 0;
  let p2 = 1;
  let input = bigStr + '1';

  let antiDup = '';
  while (p2 < input.length) {
    if (input[p1] === input[p2]) {
      p1++;
    }
    if (input[p1] !== input[p2]) {
      antiDup += input[p1];
      p1++;
    }

    p2++;
  }
  let solution = antiDup.split(' ');
  return solution;
}
