// https://www.codewars.com/kata/535bfa2ccdbf509be8000113

class Primes {
  constructor() {}

  static isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
    return num > 1;
  }

  static first(limit) {
    let start = 2;
    const primeNumbers = [];
    while (primeNumbers.length < limit) {
      if (this.isPrime(start)) primeNumbers.push(start);
      start++;
    }
    return primeNumbers;
  }
}
