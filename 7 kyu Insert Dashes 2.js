const insertDashII = (num) => {
	const digits = [...String(num)];
	let [i, j] = [0, 1];
	const res = [];

	while (j < digits.length) {
		if (isOdd(+digits[i]) && isOdd(+digits[j])) {
			res.push(digits[i], '-');
		} else if (isEven(+digits[i]) && isEven(+digits[j])) {
			res.push(digits[i], '*');
		} else {
			res.push(digits[i]);
		}

		i++;
		j++;
	}
	res.push(digits[digits.length - 1]);
	return res.join('');
};

const isEven = (n) => (n === 0 ? false : n % 2 === 0);
const isOdd = (n) => n % 2 !== 0;
