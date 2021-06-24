// https://www.codewars.com/kata/5676f07029da352ba2000065

const isPrime = (num) => {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false;
	}

	return true;
};

const largest = (n) => {
	if (typeof n !== 'number' || n <= 0) return false;
	let start = 10 ** n - 1;
	while (!isPrime(start)) {
		start--;
	}

	return start;
};
