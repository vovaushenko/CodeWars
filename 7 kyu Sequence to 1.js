// https://www.codewars.com/kata/5a05fe8a06d5b6208e00010b

const seqToOne = (n) =>
	Array.from({ length: n > 0 ? n : Math.abs(n) + 2 }, (_, id) =>
		n > 0 ? n - id : n + id
	);
