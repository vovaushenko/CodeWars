// 1128. Number of Equivalent Domino Pairs

const numEquivDominoPairs = (dominoes) =>
	Object.values(
		dominoes.reduce((hash, [a, b]) => {
			let domino = [a, b].sort((a, b) => a - b).join('');
			hash[domino] ? hash[domino]++ : (hash[domino] = 1);
			return hash;
		}, {})
	)
		.filter((fr) => fr > 1)
		.map((n) => (n * (n - 1)) / 2)
		.reduce((a, b) => a + b);

console.log(
	numEquivDominoPairs([
		[2, 1],
		[5, 4],
		[3, 7],
		[6, 2],
		[4, 4],
		[1, 8],
		[9, 6],
		[5, 3],
		[7, 4],
		[1, 9],
		[1, 1],
		[6, 6],
		[9, 6],
		[1, 3],
		[9, 7],
		[4, 7],
		[5, 1],
		[6, 5],
		[1, 6],
		[6, 1],
		[1, 8],
		[7, 2],
		[2, 4],
		[1, 6],
		[3, 1],
		[3, 9],
		[3, 7],
		[9, 1],
		[1, 9],
		[8, 9],
	])
);
