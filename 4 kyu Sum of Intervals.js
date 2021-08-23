// https://www.codewars.com/kata/52b7ed099cdc285c300001cd

const sumIntervals = (intervals) => {
	intervals.sort((a, b) => a[0] - b[0]);

	const mergedIntervals = [intervals[0]];

	for (let currInterval of intervals) {
		prevInt = mergedIntervals[mergedIntervals.length - 1];
		if (prevInt[1] > currInterval[0]) {
			prevInt[1] = Math.max(currInterval[1], prevInt[1]);
		} else {
			mergedIntervals.push(currInterval);
		}
	}

	return mergedIntervals.reduce((sum, [x, y]) => sum + y - x, 0);
};
