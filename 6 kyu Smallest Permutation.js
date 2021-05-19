// https://www.codewars.com/kata/5fefee21b64cc2000dbfa875

const minPermutation = (n) => {
	let sortedDigits = [...(Math.abs(n) + '')].map(Number).sort((a, b) => a - b);
	let permutation = [];
	let shouldInjectZeroes = true;
	let numberOfZeroes = 0;
	for (let digit of sortedDigits) {
		if (digit === 0) {
			numberOfZeroes++;
		} else {
			if (shouldInjectZeroes) {
				permutation.push(digit);
				for (let i = 0; i < numberOfZeroes; i++) permutation.push(0);
				shouldInjectZeroes = false;
			} else {
				permutation.push(digit);
			}
		}
	}
	return n < 0 ? -permutation.join('') : +permutation.join('');
};
