// https://leetcode.com/problems/sum-of-digits-in-base-k/

const convertToBaseK = (num, k) => num.toString(k);

const sumBase = (n, k) => [...convertToBaseK(n, k)].reduce((a, b) => a + +b, 0);
