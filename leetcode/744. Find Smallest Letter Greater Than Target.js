// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

/*
744. Find Smallest Letter Greater Than Target
Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.

Note that the letters wrap around.
*/
const nextGreatestLetter = (letters, target) => {
	let foundChar = letters.find(
		(char) => char.charCodeAt(0) > target.charCodeAt(0)
	);

	if (!foundChar) return letters[0];
	return foundChar;
};
