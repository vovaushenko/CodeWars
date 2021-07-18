// https://www.codewars.com/kata/5c942f40bc4575001a3ea7ec

const per = (n, stack = []) =>
	!n || String(n).length === 1
		? stack
		: per(multiplyDigits(n), [...stack, multiplyDigits(n)]);

const multiplyDigits = (n) =>
	[...String(n)].reduce((prod, d) => prod * Number(d), 1);
