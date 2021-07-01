// https://www.codewars.com/kata/5637b03c6be7e01d99000046

const lookup = { i: 1, I: 1, o: 0, O: 0, s: 5, S: 5 };

const makePassword = (phrase) =>
	phrase
		.split(' ')
		.reduce(
			(pass, w) =>
				lookup[w[0]] !== undefined ? pass + lookup[w[0]] : pass + w[0],
			''
		);
