// https://www.codewars.com/kata/59887207635904314100007b

const closest = (arr) => {
	let maxNegative = Math.max(...arr.filter((n) => n < 0));
	let minPositive = Math.min(...arr.filter((n) => n >= 0));

	if (maxNegative === -minPositive) return null;
	if (!minPositive) return 0;
	return minPositive < -maxNegative ? minPositive : maxNegative;
};
