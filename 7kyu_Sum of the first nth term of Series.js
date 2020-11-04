// https://www.codewars.com/kata/555eded1ad94b00403000071

const SeriesSum = (n) => {
  if (n === 0) return "0";
  sum = 1 + 1 / 4;

  for (let i = 1; i <= n - 2; i++) {
    sum += 1 / (4 + 3 * i);
  }

  return n === 1 ? "1.00" : sum.toFixed(2);
};

console.log(SeriesSum(0));
