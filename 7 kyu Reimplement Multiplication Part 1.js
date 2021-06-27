// https://www.codewars.com/kata/563cc8c1a3895d7d30000049

const mul = (a, b) =>
	Array.from({ length: b }, () => a).reduce((a, b) => a + b, 0);
