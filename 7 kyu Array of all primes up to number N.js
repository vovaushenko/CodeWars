// https://www.codewars.com/kata/56ce75f63ae564179200211c

const isPrime = (num) => {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false;
	}
	return true;
};

const primeArray = (n) => {
	let primeNums = [];
	let start = 2;
	while (start <= n) {
		if (isPrime(start)) primeNums.push(start);
		start++;
	}

	return primeNums;
};
