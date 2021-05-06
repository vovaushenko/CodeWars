// 476. Number Complement

/*
Given a positive integer num, output its complement number. The complement strategy is to flip the bits of its binary representation.
*/

const findComplement = (n) =>
	parseInt([...n.toString(2)].map((bit) => (bit === '1' ? 0 : 1)).join(''), 2);
