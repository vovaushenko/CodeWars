const solve = (num) => {
  const smallerPrime = nearestSmallerPrime(num);
  const biggerPrime = nearestBiggerPrime(num);
  const proximityToSmaller = num - smallerPrime;
  const proximityToBigger = biggerPrime - num;

  return proximityToSmaller <= proximityToBigger ? smallerPrime : biggerPrime;
};

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function nearestSmallerPrime(num) {
  let counter = 0;
  while (!isPrime(num)) {
    num--;
  }
  return num;
}
function nearestBiggerPrime(num) {
  let counter = 0;
  while (!isPrime(num)) {
    num++;
  }
  return num;
}