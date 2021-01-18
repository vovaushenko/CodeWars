// https://www.codewars.com/kata/557226cd3554219bdf00019b

const fib = (num, memo = [0, 1]) => {
    if (memo[n] !== undefined) return memo[n];
    let res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    return res;
};
