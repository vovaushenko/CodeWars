// https://www.codewars.com/kata/52dca71390c32d8fb900002b/train/javascript

const numberToOrdinal = (n) => {
	if (n === 0) return String(n);
	if (n % 10 === 1 && n % 100 != 11) return `${n}st`;
	if (n % 10 === 2 && n % 100 != 12) return `${n}nd`;
	if (n % 10 === 3 && n % 100 != 13) return `${n}rd`;

	return `${n}th`;
};
