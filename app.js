// https://www.codewars.com/kata/598f76a44f613e0e0b000026

const sumOfIntegersInString = (s) =>
	s
		.replace(/\D/g, ' ')
		.split(' ')
		.reduce((sum, num) => (num ? (sum += +num) : (sum += 0)), 0);
sumOfIntegersInString(
	'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
);
