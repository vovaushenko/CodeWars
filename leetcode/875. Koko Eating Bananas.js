//875. Koko Eating Bananas
/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.
*/
const minEatingSpeed = (piles, h) => {
	let min = 1;
	let max = Math.max(...piles);
	let best = max;

	const time = (speed) => {
		let total = 0;
		for (const p of piles) total += Math.ceil(p / speed);
		return total;
	};

	while (min <= max) {
		let mid = Math.floor((min + max) / 2);
		const tookTime = time(mid, piles);
		if (tookTime <= h) {
			best = mid;
			max = mid - 1;
		} else {
			min = mid + 1;
		}
	}
	return best;
};
