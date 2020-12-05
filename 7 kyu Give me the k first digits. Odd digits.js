// https://www.codewars.com/kata/59e8afdd0863c7bcb300013a

const findOddDigits = (n, k) => {
  if (k === 0) return 0;
  const odds = [...(n + '')]
    .filter((num) => parseInt(num) % 2 !== 0)
    .slice(0, k);
  return odds.length < k ? 0 : parseInt(odds.join(''));
};