// https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/
// 1893. Check if All the Integers in a Range Are Covered
/*
You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.

Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges. Return false otherwise.

An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.
*/
const isCovered = (ranges, left, right) => {
	const hashOfAllNums = ranges
		.reduce(
			(res, [start, end]) =>
				res.concat(
					Array.from({ length: end - start + 1 }, (_, id) => start + id)
				),
			[]
		)
		.reduce((h, n) => ((h[n] = h[n] + 1 || 1), h), {});

	for (let i = left; i <= right; i++) {
		if (!(i in hashOfAllNums)) return false;
	}

	return true;
};
