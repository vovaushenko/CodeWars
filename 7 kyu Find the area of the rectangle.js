// https://www.codewars.com/kata/580a0347430590220e000091

const area = (d, l) => {
	if (d <= l) return 'Not a rectangle';
	const s = l * Math.sqrt(d ** 2 - l ** 2);

	return s % 1 ? +s.toFixed(2) : s;
};
