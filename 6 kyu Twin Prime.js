// 6 kyu
// Twin Prime
const isTwinPrime = (num) => isPrime(num) && [num - 2, num + 2].some(isPrime);

const isPrime = (num) => {
	for (let i = 2, s = Math.sqrt(num); i <= s; i++)
		if (num % i === 0) return false;
	return num > 1;
};
