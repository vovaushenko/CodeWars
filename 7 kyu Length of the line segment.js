// https://www.codewars.com/kata/55f1786c296de4952f000014

const lengthOfLine = ([[x1, y1], [x2, y2]]) =>
	Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2).toFixed(2);
