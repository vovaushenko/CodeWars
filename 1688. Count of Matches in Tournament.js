// https://leetcode.com/problems/count-of-matches-in-tournament/

const numberOfMatches = (n) => {
	if (n <= 0) return 0;
	let matches = 0;
	const calculate = (n) => {
		if (n === 1) return;
		if (n % 2 === 0) matches += n / 2;
		if (n % 2 !== 0) matches += Math.floor(n / 2);
		let nextRound = n % 2 === 0 ? n / 2 : Math.floor(n / 2) + 1;

		calculate(nextRound);
	};
	calculate(n);
	return matches;
};
