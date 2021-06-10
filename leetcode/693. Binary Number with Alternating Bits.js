// https://leetcode.com/problems/binary-number-with-alternating-bits/

/*
693. Binary Number with Alternating Bits
Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.
*/

const hasAlternatingBits = (num) => {
	let bits = num.toString(2).split('');
	let [i, j] = [0, 1];
	while (j < bits.length) {
		if (bits[i] === bits[j]) return false;
		i++;
		j++;
	}
	return true;
};
