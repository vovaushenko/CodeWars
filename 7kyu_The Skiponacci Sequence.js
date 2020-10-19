// https://www.codewars.com/kata/580777ee2e14accd9f000165/train/javascript
// Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:
// "1 skip 2 skip 5 skip 13 skip 34"
// Return the result as a string
// You can presume that n is always a positive integer between (and including) 1 and 64.

function skiponacci(n) {
  let fiboArr = [];
  fiboArr[0] = 1;
  fiboArr[1] = 1;
  for (let i = 2; i <= n - 1; i++) {
    fiboArr[i] = fiboArr[i - 2] + fiboArr[i - 1];
  }

  for (let j = 0; j < fiboArr.length; j++) {
    if (j % 2 != 0) {
      fiboArr[j] = 'skip';
    }
  }
  return n === 1 ? '1' : fiboArr.join(' ');
}
