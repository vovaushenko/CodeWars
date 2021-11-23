// 680. Valid Palindrome II
/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.
*/
const isPalidrome = (s, p1, p2) => {
	while (p1 < p2) {
		if (s[p1] !== s[p2]) return false;
		p1++;
		p2--;
	}

	return true;
};

const validPalindrome = (s) => {
	let [p1, p2] = [0, s.length - 1];

	while (p1 < p2) {
		if (s[p1] !== s[p2]) {
			return isPalidrome(s, p1 + 1, p2) || isPalidrome(s, p1, p2 - 1);
		}
		p1++;
		p2--;
	}
	return true;
};
