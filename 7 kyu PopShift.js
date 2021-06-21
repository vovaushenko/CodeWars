// https://www.codewars.com/kata/57cec34272f983e17800001e

const popShift = (s) => {
	let chars = [...s];
	let res = ['', ''];

	while (chars.length > 1) {
		res[0] += chars.pop();
		res[1] += chars.shift();
	}

	if (!chars.length) chars.push('');

	return [...res, ...chars];
};
