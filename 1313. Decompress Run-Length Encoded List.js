// 1313. Decompress Run-Length Encoded List

/*
We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.
*/

const decompressRLElist = (nums) => {
	const result = [];
	let [i, j] = [0, 1];

	while (j < nums.length) {
		for (let k = 0; k < nums[i]; k++) result.push(nums[j]);
		i += 2;
		j += 2;
	}

	return result;
};
