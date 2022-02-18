//402. Remove K Digits
/*
Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.
*/
const removeKdigits = (num, k) => {
	if (num < 10 && k) return '0';
	if (k === 0) return num;
	const digits = [...String(num)];
	let i = 0;
	while (k > 0) {
		while (digits[i] <= digits[i + 1] && i < digits.length - 1) i++;
		digits.splice(i, 1);
		k--;
		i = 0;
	}
	return digits.join('').replace(/^0+/, '') || '0';
};
