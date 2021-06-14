// https://www.codewars.com/kata/57aa218e72292d98d500240f

const calcS = (a, b, c) => (a + b + c) / 2;

const heron = (a, b, c, s = calcS(a, b, c)) =>
	parseInt(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2));
