//1753. Maximum Score From Removing Stones
/*
You are playing a solitaire game with three piles of stones of sizes a​​​​​​, b,​​​​​​ and c​​​​​​ respectively. Each turn you choose two different non-empty piles, take one stone from each, and add 1 point to your score. The game stops when there are fewer than two non-empty piles (meaning there are no more available moves).

Given three integers a​​​​​, b,​​​​​ and c​​​​​, return the maximum score you can get.
*/
const ascending = (a, b) => a - b;

const maximumScore = (...piles) => {
	let [min, mid, max] = piles.sort(ascending);
	let res = 0;
	if (min + mid > max) {
		const sbstr = Math.floor((min + mid - max) / 2);
		res += sbstr;
		min -= sbstr;
		mid -= sbstr;
	}
	const add = Math.min(min + mid, max);

	res += add;
	return res;
};
