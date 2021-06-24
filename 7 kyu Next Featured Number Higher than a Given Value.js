// https://www.codewars.com/kata/56abc5e63c91630882000057

const nextNumb = (val) => {
	if (val > 99999999)
		return 'There is no possible number that fulfills those requirements';
	val++;
	while (!isProperNum(val)) val++;
	return val;
};

let isProperNum = (n) =>
	n % 3 === 0 &&
	n % 2 !== 0 &&
	[...String(n)].length === [...new Set(String(n))].length;
