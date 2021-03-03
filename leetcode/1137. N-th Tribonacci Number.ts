// 1137. N-th Tribonacci Number
// The Tribonacci sequence Tn is defined as follows:

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

const tribonacci = (n: number): number => {
  const memo = [0, 1, 1];
  let i = 0,
    j = 1,
    k = 2;

  while (memo.length <= n) {
    memo.push(memo[i] + memo[j] + memo[k]);
    i++;
    j++;
    k++;
  }

  return memo[n];
};
