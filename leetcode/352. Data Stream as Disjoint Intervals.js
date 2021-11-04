// 352. Data Stream as Disjoint Intervals
/*
Given a data stream input of non-negative integers a1, a2, ..., an, summarize the numbers seen so far as a list of disjoint intervals.

Implement the SummaryRanges class:

SummaryRanges() Initializes the object with an empty stream.
void addNum(int val) Adds the integer val to the stream.
int[][] getIntervals() Returns a summary of the integers in the stream currently as a list of disjoint intervals [starti, endi].
*/

class SummaryRanges {
	constructor(nums = {}) {
		this.nums = nums;
	}

	addNum(num) {
		this.nums[num] = true;
	}

	getIntervals() {
		const vals = Object.keys(this.nums);

		const intervals = [];

		let [i, j] = [0, 1];
		let interval = [];
		while (j <= vals.length) {
			const curr = +vals[i];
			const next = +vals[j];
			if (next - curr !== 1) {
				interval.push(curr);
				if (interval.length > 0) {
					intervals.push(interval);
				}
				interval = [];
			} else {
				interval.push(curr);
			}

			i++;
			j++;
		}

		return intervals.map((int) =>
			int.length === 1 ? [int[0], int[0]] : [int[0], int[int.length - 1]]
		);
	}
}
