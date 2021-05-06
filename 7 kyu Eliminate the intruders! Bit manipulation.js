// https://www.codewars.com/kata/5a0d38c9697598b67a000041

const eliminateUnsetBits = (n) =>
	parseInt([...n].filter((bit) => bit === '1').join(''), 2) || 0;
