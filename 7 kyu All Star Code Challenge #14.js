// https://www.codewars.com/kata/5864eb8039c5ab9cd400005c

const median = (arr) => {
	const sorted = [...arr].sort((a, b) => a - b);
	const mid = ~~(sorted.length / 2);

	console.log(sorted[mid]);
	return sorted.length % 2 !== 0
		? sorted[mid]
		: (sorted[mid] + sorted[mid - 1]) / 2;
};
