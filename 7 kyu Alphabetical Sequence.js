// https://www.codewars.com/kata/5bd00c99dbc73908bb00057a

const alphaSeq = (chars) =>
	[...chars]
		.map((char) => char.toLowerCase())
		.sort()
		.map((char) => char.toUpperCase() + char.repeat(char.charCodeAt(0) - 97))
		.join(',');
