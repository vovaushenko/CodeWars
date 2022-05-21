//1332. Remove Palindromic Subsequences
const isPalindrome = (s) => [...s].reverse().join('') === s;

const removePalindromeSub = (s) => {
	if (!s || !s.length) return 0;

	if (isPalindrome(s)) return 1;

	return 2;
};
