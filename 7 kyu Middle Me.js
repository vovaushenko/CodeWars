// https://www.codewars.com/kata/59cd155d1a68b70f8e000117

const middleMe = (n, x, y) =>
	!(n % 2) ? y.repeat(n / 2) + x + y.repeat(n / 2) : x;
