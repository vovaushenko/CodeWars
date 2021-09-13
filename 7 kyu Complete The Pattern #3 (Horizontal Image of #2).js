// https://www.codewars.com/kata/557341907fbf439911000022

const pattern = (n, line = '', levels = []) =>
	n < 0
		? ''
		: !n
		? levels.join('\n')
		: pattern(n - 1, (line += n), [...levels, line]);
