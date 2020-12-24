// https://www.codewars.com/kata/55aa075506463dac6600010d

const listSquared = (m, n) => {
  let result = [];
  while (m <= n) {
    let squredSum = sumSquaredElements(findDivisors(m));
    if (isSquare(squredSum)) result.push([m, squredSum]);
    m++;
  }

  return result;
};

function findDivisors(num) {
  let divisors = [];
  for (let i = 1; i <= num; i++) {
    num % i === 0 && divisors.push(i);
  }
  return divisors;
}

function sumSquaredElements(arr) {
  return arr.reduce((total, num) => total + num ** 2, 0);
}

function isSquare(num) {
  return Math.sqrt(num) % 1 === 0 ? true : false;
}
