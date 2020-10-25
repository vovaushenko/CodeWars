// https://www.codewars.com/kata/5262119038c0985a5b00029f

function isPrime(num) {
  if (num < 0 || num == 1 || num == 0) {
    return false;
  }
  const s = Math.sqrt(num);
  for (let i = 2; i <= s; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
