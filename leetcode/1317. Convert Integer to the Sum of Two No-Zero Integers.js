//1317. Convert Integer to the Sum of Two No-Zero Integers

const containsZero = (num) => [...String(num)].includes('0');

const getNoZeroIntegers = (n) => {
	for (let i = n - 1; i >= 1; i--) {
		if (!containsZero(i) && !containsZero(n - +i)) return [n - +i, i];
	}
};
