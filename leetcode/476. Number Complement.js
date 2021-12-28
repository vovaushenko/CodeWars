// 476. Number Complement

/*
Given a positive integer num, output its complement number. The complement strategy is to flip the bits of its binary representation.
*/

const findComplement = (n) =>
	parseInt([...n.toString(2)].map((bit) => (bit === '1' ? 0 : 1)).join(''), 2);

/*
	FP style
	*/

const pipe =
	(...fns) =>
	(arg) =>
		fns.reduce((v, f) => f(v), arg);

const binary = (num) => num.toString(2);

const invertBits = (binary) =>
	[...binary].reduce((inv, bit) => (bit === '1' ? inv + '0' : inv + '1'), '');

const int = (binary) => parseInt(binary, 2);

const findComplementFP = (num) => pipe(binary, invertBits, int)(num);
