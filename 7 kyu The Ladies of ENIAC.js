// https://www.codewars.com/kata/56d31aaefd3a52902a000d66/solutions/javascript

const radLadies = (name) =>
	[...name]
		.filter((c) => !'%$&/£?@'.includes(c) && !/\d/.test(c))
		.join('')
		.toUpperCase();
