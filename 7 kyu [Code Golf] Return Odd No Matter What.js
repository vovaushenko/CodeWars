// https://www.codewars.com/kata/5f882dcc272e7a00287743f5

alwaysOdd = (n) => n - !(n % 2);
alwaysOdd = (n) => (n & 1 ? n : --n);
alwaysOdd = (n) => n-- - (n & 1);
alwaysOdd = (n) => (n - 1) | 1;
alwaysOdd = (n) => ((n * n) % 2) + n - 1;
