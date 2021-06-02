// https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3

const isPalindrome = (str) => [...str].reverse().join('') === str;

const solve = (str) => {
	if (isPalindrome(str)) return 'OK';
	for (let i = 0; i < str.length; i++) {
		if (isPalindrome(str.slice(0, i) + str.slice(i + 1))) return 'remove one';
	}
	return 'not possible';
};
