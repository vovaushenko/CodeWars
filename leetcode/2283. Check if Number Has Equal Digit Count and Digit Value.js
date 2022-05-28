//2283. Check if Number Has Equal Digit Count and Digit Value
const digitCount = (num) => {
	const map = new Map();
	for (const digit of num) {
		if (map.has(digit)) {
			map.set(digit, map.get(digit) + 1);
		} else {
			map.set(digit, 1);
		}
	}
	for (let i = 0; i <= num.length - 1; i++) {
		const frequency = map.get(String(i)) || 0;
		if (frequency + '' !== String(num[i])) return false;
	}
	return true;
};
