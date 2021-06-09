// https://leetcode.com/problems/palindrome-partitioning/

/*
131. Palindrome Partitioning
Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward.
*/
const isPalindrome = (str) => {
	let [i, j] = [0, str.length - 1];

	while (i < j) {
		if (str[i] !== str[j]) return false;
		i++;
		j--;
	}

	return true;
};

const partition = (s) => {
	const res = [];

	const helper = (str, palidromes) => {
		if (!str.length && palidromes.length) {
			res.push(palidromes);
			return;
		}

		for (let i = 0; i < str.length; i++) {
			let substring = str.substring(0, i + 1);

			if (isPalindrome(substring)) {
				helper(str.substring(i + 1), [...palidromes, substring]);
			}
		}
	};

	helper(s, []);

	return res;
};

console.log(partition('aab'));

var partition = function (s) {
	if (s.length == 1) return [[s]];

	let result = [];
	findPalindrom([], 0);
	return result;

	function findPalindrom(palindrom, start) {
		if (start === s.length) {
			result.push([...palindrom]);
			return;
		}

		let sub = '';
		for (let i = start; i < s.length; i++) {
			sub += s[i];
			if (checkPalindrom(sub)) {
				palindrom.push(sub);
				findPalindrom([...palindrom], i + 1);
				palindrom.pop();
			}
		}
	}

	function checkPalindrom(sub) {
		let start = 0;
		let end = sub.length - 1;
		while (start < end) {
			if (sub[start] != sub[end]) {
				return false;
			}
			start++;
			end--;
		}

		return true;
	}
};
