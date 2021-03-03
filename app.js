const tribonacci = (n) => {
  if (n < 2) return n;
  if (n == 2) return 1;
  let prev1 = 1;
  let prev2 = 1;
  let prev3 = 0;

  for (let i = 3, temp; i <= n; i++) {
    temp = prev1 + prev2 + prev3;
    prev3 = prev2;
    prev2 = prev1;
    prev1 = temp;
  }
  return prev1;
};
console.log(tribonacci(25));
