//5. Longest Palindromic Substring
/*
Given a string s, return the longest palindromic substring in s.
*/
const longestPalindrome = (s) => {
	let maxPal = '';

	const move = (left, right) => {
		while (left >= 0 && s[left] === s[right]) {
			left--;
			right++;
		}
		left++;
		right--;

		if (maxPal.length < right - left + 1) {
			maxPal = s.slice(left, right + 1);
		}
	};

	for (let i = 0; i < s.length; i++) {
		move(i, i);
		move(i, i + 1);
	}

	return maxPal;
};
