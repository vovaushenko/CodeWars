//! 1930. Unique Length-3 Palindromic Subsequences
/*
Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

A palindrome is a string that reads the same forwards and backwards.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".*/

const countPalindromicSubsequence = (s) => {
	const palindromes = {};
	let seen = {};
	let palindromeCount = 0;
	const boundary = [...s].reduce(
		(b, c, id) => (b[c] ? b[c].push(id) : (b[c] = [id]), b),
		{}
	);

	for (let key in boundary) {
		let ids = boundary[key];
		boundary[key] = [Math.min(...ids), Math.max(...ids)];
	}

	for (let i = 0; i < s.length; i++) {
		let char = s[i];
		if (!seen[char]) {
			let [start, finish] = boundary[char];
			if (start === finish) continue;

			let chunk = s.slice(start + 1, finish);

			for (let letter of chunk) {
				let currentPalindrome = `${char}${letter}${char}`;
				if (!(currentPalindrome in palindromes)) {
					palindromeCount++;
					palindromes[currentPalindrome] = true;
				}
			}
			seen[char] = true;
		}
	}
	return palindromeCount;
};
