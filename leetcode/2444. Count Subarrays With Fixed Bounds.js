// 2444. Count Subarrays With Fixed Bounds
function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)];
}

const countSubarrays = (nums, minK, maxK) => {
	const [min, max] = minMax(nums);
	if (minK < min || maxK > max) return 0;

	let count = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j <= nums.length; j++) {
			const subarr = nums.slice(i, j);
			const [subarrMin, subarrMax] = minMax(subarr);
			if (subarrMin === minK && subarrMax === maxK) count++;
		}
	}

	return count;
};

function countSubarrays2(nums, minK, maxK) {
	let LEN = nums.length;
	let ans = 0;
	let j = 0;
	let minKIdx = -1;
	let maxKIdx = -1;

	for (let i = 0; i < LEN; i++) {
		let num = nums[i];

		if (num < minK || num > maxK) {
			minKIdx = -1;
			maxKIdx = -1;
			j = i + 1;
		} else {
			if (num === minK) minKIdx = i;
			if (num === maxK) maxKIdx = i;
		}

		ans += Math.max(0, Math.min(minKIdx, maxKIdx) - j + 1);
	}
	return ans;
}
