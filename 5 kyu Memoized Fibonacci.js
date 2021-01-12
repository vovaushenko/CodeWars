// https://www.codewars.com/kata/529adbf7533b761c560004e5

const fibonacci = (n, memo = [0, 1]) => {
    if (memo[n] !== undefined) return memo[n];
    let res = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    memo[n] = res;
    return res;
};
