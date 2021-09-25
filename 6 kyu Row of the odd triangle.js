// https://www.codewars.com/kata/59b843b58bcb7766660000f6/train/javascript

const oddRow = (n) =>
	Array.from({ length: n }, (_, id) => n * (n - 1) + 1 + 2 * id);
