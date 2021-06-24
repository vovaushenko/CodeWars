//https://www.codewars.com/kata/56f1c6034d0c330e4a001059

const chars = '0123456789ABCDEF';

const generateRandomHexChar = () => chars[~~(Math.random() * 16)];

const generateColor = () =>
	'#' + Array.from({ length: 6 }, () => generateRandomHexChar()).join('');
