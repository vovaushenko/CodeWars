// https://leetcode.com/problems/complement-of-base-10-integer/

const bitwiseComplement = (n) =>
	parseInt(
		[...n.toString(2)].map((bit) => (bit === '0' ? '1' : '0')).join(''),
		2
	);
