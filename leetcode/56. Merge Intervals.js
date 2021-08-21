// https://leetcode.com/problems/merge-intervals/

const merge = (intervals) => {
	intervals.sort((a, b) => a[0] - b[0]);

	const res = [intervals[0]];

	for (let currInt of intervals) {
		prevInt = res[res.length - 1];

		if (prevInt[1] >= currInt[0]) {
			prevInt[1] = Math.max(currInt[1], prevInt[1]);
		} else {
			res.push(currInt);
		}
	}

	return res;
};
