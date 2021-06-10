// https://leetcode.com/problems/1-bit-and-2-bit-characters/

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

isOneBitCharacter([1, 0, 0]);
