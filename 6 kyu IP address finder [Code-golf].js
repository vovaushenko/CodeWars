// https://www.codewars.com/kata/5b883cdecc7c03c0fa00015a

f = (i) =>
	[1, 2, 3, 4].map(
		(x) => ([...i].reduce((a, b) => a + b.charCodeAt(0), 0) * x) % 256
	);
