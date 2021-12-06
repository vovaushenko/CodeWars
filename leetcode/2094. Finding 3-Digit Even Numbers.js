// 2094. Finding 3-Digit Even Numbers
/*
You are given an integer array digits, where each element is a digit. The array may contain duplicates.

You need to find all the unique integers that follow the given requirements:

The integer consists of the concatenation of three elements from digits in any arbitrary order.
The integer does not have leading zeros.
The integer is even.
For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.

Return a sorted array of the unique integers.
*/

const isEven = (n) => !(n % 2);
const findEvenNumbers = (digits) => {
	const res = [];
	const seen = {};
	for (let i = 0; i < digits.length; i++) {
		let first = digits[i];
		if (first) {
			for (let j = 0; j < digits.length; j++) {
				if (j !== i) {
					let second = digits[j];
					for (let k = 0; k < digits.length; k++) {
						if (k !== i && k !== j) {
							let third = digits[k];
							const combined = Number([first, second, third].join(''));
							if (isEven(combined) && !(combined in seen)) {
								res.push(combined);
								seen[combined] = true;
							}
						}
					}
				}
			}
		}
	}

	return res;
};
