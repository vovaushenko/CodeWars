// https://www.codewars.com/kata/5b4e474305f04bea11000148

const digits = (num) => {
	let digits = [...(num + '')].map(Number);
	let sums = [];
	for (let i = 0; i < digits.length; i++) {
		for (let j = i + 1; j < digits.length; j++) {
			sums.push(digits[i] + digits[j]);
		}
	}

	return sums;
};

console.log(digits(12345));
