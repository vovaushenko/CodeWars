const mergeOverlappingIntervals = (intervals) => {
	intervals.sort((a, b) => a[0] - b[0]);
	const res = [];
	let currentInterval = intervals[0];

	for (let i = 1; i < intervals.length; i++) {
		const [start, end] = intervals[i];
		if (start <= currentInterval[1]) {
			currentInterval = [
				Math.min(start, currentInterval[0]),
				Math.max(end, currentInterval[1]),
			];
		} else {
			res.push(currentInterval);
			currentInterval = intervals[i];
		}
	}

	res.push(currentInterval);
	return res;
};
