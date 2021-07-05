// https://www.codewars.com/kata/59e9f404fc3c49ab24000112

const lookup = { a: 4, A: 4, e: 3, E: 3, l: 1 };

const nerdify = (txt) =>
	[...txt].map((char) => (char in lookup ? lookup[char] : char)).join('');
