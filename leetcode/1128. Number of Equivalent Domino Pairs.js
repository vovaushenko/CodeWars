// 1128. Number of Equivalent Domino Pairs
/*
Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].
*/

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
