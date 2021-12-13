const isPrime = (num) => {
	for (let i = 2, s = Math.sqrt(num); i <= s; i++)
		if (num % i === 0) return false;
	return num > 1;
};

const getSextupleSum = (sxt) => sxt.reduce((a, b) => a + b, 0);

const findPrimesSextuplet = (sumLimit) => {
	let p = 1;
	while (true) {
		p++;
		if (isPrime(p)) {
			let sextuple = [p, p + 4, p + 6, p + 10, p + 12, p + 16];
			if (sextuple.every((num) => isPrime(num))) {
				const sum = getSextupleSum(sextuple);
				if (sum >= sumLimit) return sextuple;
			}
		}
	}
};
