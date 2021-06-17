// https://www.codewars.com/kata/5681bc8d17af37f50e000015

const isPrime = (num) => {
	if (num < 2) return false;
	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false;
	}

	return true;
};

const primes = (min, max) => {
	let primeNums = [];
	while (min <= max) {
		if (isPrime(min)) primeNums.push(min);
		min++;
	}

	return primeNums.length ? primeNums : null;
};
