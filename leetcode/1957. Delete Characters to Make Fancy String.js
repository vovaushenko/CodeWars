// https://leetcode.com/problems/delete-characters-to-make-fancy-string/
//* 1957. Delete Characters to Make Fancy String
/*
A fancy string is a string where no three consecutive characters are equal.

Given a string s, delete the minimum possible number of characters from s to make it fancy.

Return the final string after the deletion. It can be shown that the answer will always be unique.
*/

const makeFancyString = (str) => {
	let solution = '';

	for (let i = 0; i < str.length; i++) {
		// if three chars are similar -> skip
		if (str[i] === str[i + 1] && str[i + 1] === str[i + 2]) {
			continue;
		} else {
			// otherwise add char to solution
			solution += str[i];
		}
	}

	return solution;
};
