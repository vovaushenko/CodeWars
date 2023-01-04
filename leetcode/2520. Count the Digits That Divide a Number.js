const digits = (n) => [...String(n)].map(Number);
const isDivisor = (n, d) => n % d === 0;

const countDigits = (num) =>
	digits(num).filter((n) => isDivisor(num, n)).length;
