//2269. Find the K-Beauty of a Number
const divisorSubstrings = (num, k) => {
	const digits = String(num);

	let count = 0;

	for (let i = 0; i <= digits.length - k; i++) {
		const possibleDivisor = Number(digits.slice(i, i + k));

		if (num % possibleDivisor === 0) count++;
	}

	return count;
};
