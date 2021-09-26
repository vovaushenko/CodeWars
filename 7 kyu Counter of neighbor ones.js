// https://www.codewars.com/kata/56ec1e8492446a415e000b63

const onesCounter = (input) =>
	input
		.join('')
		.split('0')
		.filter((c) => c)
		.map((chunk) => chunk.length);
