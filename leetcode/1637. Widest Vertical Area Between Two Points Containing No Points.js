//1637. Widest Vertical Area Between Two Points Containing No Points
const maxWidthOfVerticalArea = (points) => {
	const xs = points.map(([x, _]) => x).sort((a, b) => a - b);
	let [i, j] = [0, 1];
	let max = 0;
	while (j < xs.length) {
		max = Math.max(max, xs[j] - xs[i]);
		i++;
		j++;
	}
	return max;
};
