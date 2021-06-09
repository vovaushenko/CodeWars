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

	const helper = (str, array) => {
		if (str.length === 0 && array.length !== 0) {
			res.push(array);
			return;
		}

		for (let i = 0; i < str.length; i++) {
			const subStr = str.substring(0, i + 1);

			if (isPalindrome(subStr))
				helper(str.substring(i + 1), [...array, subStr]);
		}
	};

	helper(s, []);

	return res;
};

partition('aab');
