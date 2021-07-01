// https://leetcode.com/problems/largest-odd-number-in-string/

const largestOddNumber = (num) => {
	for (let i = num.length - 1; i >= 0; i--) {
		if (isOdd(+num[i])) return num.slice(0, i + 1);
	}
	return '';
};

const isOdd = (n) => n % 2 !== 0;
