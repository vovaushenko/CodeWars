// https://www.codewars.com/kata/56a6ce697c05fb4667000029

const isPalindromicNumber = (num) =>
	+[...String(num)].reverse().join('') === num;

const nextPal = (n) => {
	n++;
	while (!isPalindromicNumber(n)) {
		n++;
	}

	return n;
};
