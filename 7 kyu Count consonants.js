// https://www.codewars.com/kata/564e7fc20f0b53eb02000106

const consonantCount = (str) =>
	[...str.replace(/[^A-Za-z]+/g, '')].filter(
		(char) => !'aeiou'.includes(char.toLowerCase())
	).length;
