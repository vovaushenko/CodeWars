// https://www.codewars.com/kata/5a8fbe73373c2e904700008c

const isPalindrome = (s) => [...s].reverse().join('') === s;

const solve = (str) => {
	let chars = [...str];
	let count = 0;
	while (count < str.length) {
		chars.unshift(chars.pop());
		if (isPalindrome(chars.join(''))) return true;
		count++;
	}

	return false;
};
