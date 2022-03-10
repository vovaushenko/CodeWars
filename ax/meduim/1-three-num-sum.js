// Possible solutions
// a) hash + double loop
//

const sum = ([x, y, z]) => x + y + z;

const threeNumberSum = (arr, targetSum) => {
	arr.sort((a, b) => a - b);
	const triplets = [];
	for (let i = 0; i < arr.length; i++) {
		const first = arr[i];
		let [lp, rp] = [i + 1, arr.length - 1];
		while (lp < rp) {
			const [second, third] = [arr[lp], arr[rp]];
			const triplet = [first, second, third];

			if (sum(triplet) === targetSum) {
				triplets.push([first, second, third].sort((a, b) => a - b));
				lp++;
				rp--;
			} else if (sum(triplet) < targetSum) {
				lp++;
			} else if (sum(triplet) > targetSum) {
				rp--;
			}
		}
	}

	return triplets;
};

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
