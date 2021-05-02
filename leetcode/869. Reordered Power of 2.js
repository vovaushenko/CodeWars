// https://leetcode.com/problems/reordered-power-of-2/

// You are given an integer n. We reorder the digits in any order (including the original order) such that the leading digit is not zero.

// Return true if and only if we can do this so that the resulting number is a power of two.

const maxNumberFromDigits = (num) =>
	+[...(num + '')]
		.map(Number)
		.sort((a, b) => b - a)
		.join('');

const reorderedPowerOf2 = (n) => {
	const limit = maxNumberFromDigits(n);
	let powersOfTwo = [1];
	let power = 1;
	while (powersOfTwo[powersOfTwo.length - 1] < limit) {
		powersOfTwo.push(2 ** power);
		power++;
	}
	const initialDigits = [...(n + '')];

	for (let powerOfTwo of powersOfTwo) {
		const currentDigits = [...(powerOfTwo + '')];

		if (currentDigits.sort().join('') === initialDigits.sort().join(''))
			return true;
	}

	return false;
};
