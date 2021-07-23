//* 915. Partition Array into Disjoint Intervals
/*
Given an array nums, partition it into two (contiguous) subarrays left and right so that:

Every element in left is less than or equal to every element in right.
left and right are non-empty.
left has the smallest possible size.
Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.
*/

const partitionDisjoint = (nums) => {
	for (let i = 1; i < nums.length; i++) {
		let leftChunk = nums.slice(0, i);
		let rightChunk = nums.slice(i);
		let rightMin = Math.min(...rightChunk);

		if (leftChunk.every((n) => n <= rightMin)) return leftChunk.length;
	}
};
