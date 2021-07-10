// https://www.codewars.com/kata/5849169a6512c5964000016e

const greatestCommonFactor = (nums) => {
	let possibleFactors = calculateFactors(nums[0]);
	let commonFactors = [];

	for (let i = 1; i < nums.length; i++) {
		let common = [];
		for (let factor of possibleFactors) {
			if (nums[i] % factor === 0) {
				common.push(factor);
			}

			commonFactors.push(common);
		}
	}

	let greatestFactor = 1;
	for (let factor of possibleFactors) {
		if (commonFactors.every((factors) => factors.includes(factor))) {
			greatestFactor = Math.max(greatestFactor, factor);
		}
	}

	return greatestFactor;
};

const calculateFactors = (n) => {
	let factors = [];
	for (let i = 1; i <= ~~(n / 2) + 10; i++) {
		if (n % i === 0) factors.push(i);
	}
	return factors;
};
