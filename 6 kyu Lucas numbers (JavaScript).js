// https://www.codewars.com/kata/55a7de09273f6652b200002e

const lucasnum = (n, memo = [2, 1]) => {
	let id = Math.abs(n);
	if (memo[id] !== undefined) return n >= 0 ? memo[id] : -memo[id];
	let lucasNum = lucasnum(id - 1, memo) + lucasnum(id - 2, memo);
	memo[id] = lucasNum;

	return n >= 0 ? memo[n] : id % 2 === 0 ? memo[id] : -memo[id];
};
