// 2078. Two Furthest Houses With Different Colors

/*
There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.

Return the maximum distance between two houses with different colors.

The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.
*/

const maxDistance = (colors) => {
	const colorMap = colors.reduce(
		(m, clr, id) => (m[clr] ? m[clr].push(id) : (m[clr] = [id]), m),
		{}
	);

	let maxDist = 0;
	const seen = {};
	for (let color of colors) {
		if (!(color in seen)) {
			const minID = colorMap[color][0];
			for (let key in colorMap) {
				const maxID = colorMap[key][colorMap[key].length - 1];
				if (+key !== color) {
					maxDist = Math.max(maxDist, maxID - minID);
				}
			}
			seen[color] = true;
		}
	}

	return maxDist;
};
