// https://www.codewars.com/kata/5aa3af22ba1bb5209f000037

const solve = (eq) =>
	[...eq]
		.reverse()
		.join('')
		.replace(/(\d+)/gi, (d) => [...d].reverse().join(''));
