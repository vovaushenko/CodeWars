// https://leetcode.com/problems/longest-palindromic-substring/

const isPalindrome = (str: string): boolean =>
	[...str].reverse().join('') === str;

export function longestPalindrome(s: string): string {
	let [i, j] = [1, 0];

	return 'hello';
}

console.log(longestPalindrome('babad'));
