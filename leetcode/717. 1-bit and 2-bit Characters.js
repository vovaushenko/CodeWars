// https://leetcode.com/problems/1-bit-and-2-bit-characters/

/*
We have two special characters:

The first character can be represented by one bit 0.
The second character can be represented by two bits (10 or 11).
Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.
*/

const isOneBitCharacter = (bits) => {
	let i = 0;
	let currentJump = 1;

	while (i < bits.length) {
		if (bits[i] === 0) {
			currentJump = 1;
			i += currentJump;
		} else {
			currentJump = 2;
			i += currentJump;
		}
	}
	return currentJump === 1;
};
