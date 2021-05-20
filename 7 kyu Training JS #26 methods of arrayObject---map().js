// https://www.codewars.com/kata/572fdeb4380bb703fc00002c

const isolateIt = (arr) =>
	arr.map(
		(s, l = s.length) =>
			s.slice(0, l / 2) + '|' + s.slice(l / 2 + (l % 2 ? 1 : 0))
	);
