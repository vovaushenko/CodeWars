// Dynamic programming

// const basicFib = (n) => {
//   if (n <= 2) return 1;

//   return basicFib(n - 2) + basicFib(n - 1);
// };

// const fib = (n, memo = [0n, 1n]) => {
//   if (n < 0) {
//     n = Math.abs(n);
//     if (memo[n] !== undefined) return memo[n];

//     let res = fib(n - 2, memo) + fib(n - 1, memo);

//     memo[n] = res;
//     return n % 2 === 0 ? -res : res;
//   }

//   if (memo[n] !== undefined) return memo[n];

//   let res = fib(n - 2, memo) + fib(n - 1, memo);

//   memo[n] = res;

//   return res;
// };

// const tabulatedFibs = (n) => {
//   const memo = [0n, 1n];

//   while (memo.length <= Math.abs(n)) {
//     memo.push(memo[memo.length - 2] + memo[memo.length - 1]);
//   }

//   if (n < 0) {
//     return n % 2 === 0 ? -memo[Math.abs(n)] : memo[Math.abs(n)];
//   }

//   return memo[Math.abs(n)];
// };

const fib = (n) => {
  const memo = {
    0: 0n,
    1: 1n,
  };

  let counter = 2;

  while (counter <= Math.abs(n)) {
    memo[counter] = memo[counter - 1] + memo[counter - 2];
    counter++;
  }

  if (n < 0) {
    return n % 2 === 0 ? -memo[Math.abs(n)] : memo[Math.abs(n)];
  }

  return memo[Math.abs(n)];
};
