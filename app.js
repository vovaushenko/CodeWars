// https://www.codewars.com/kata/5539fecef69c483c5a000015

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const reverseNum = (num) => Number([...(num + '')].reverse().join(''));

const backwardsPrime = (start, stop) => {
  let result = [];
  while (start <= stop) {
    if (String(start).length > 1 && start !== reverseNum(start)) {
      if (isPrime(start) && isPrime(reverseNum(start))) result.push(start);
    }

    start++;
  }
  return result;
};
console.log(backwardsPrime(70000, 70245));

// [70001, 70009, 70061, 70079, 70121, 70141, 70163, 70207, 70241]
