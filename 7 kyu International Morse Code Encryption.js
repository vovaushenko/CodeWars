// https://www.codewars.com/kata/55b8c0276a7930249e00003c
const encryption = (message) =>
	[...message].map((char) => CHAR_TO_MORSE[char]).join(' ');
