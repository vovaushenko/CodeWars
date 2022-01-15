/*
1646. Get Maximum in Generated Array
*/
/*
You are given an integer n. A 0-indexed integer array nums of length n + 1 is generated in the following way:

nums[0] = 0
nums[1] = 1
nums[2 * i] = nums[i] when 2 <= 2 * i <= n
nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
Return the maximum integer in the array nums​​​.

*/

const getMaximumGenerated = (n) => {
	if (!n) return 0;
	let arr = [0, 1];
	for (let i = 2; i <= n; i++) {
		if (i % 2 === 0) {
			arr.push(arr[i / 2]);
		} else {
			arr.push(arr[(i - 1) / 2] + arr[(i - 1) / 2 + 1]);
		}
	}

	return Math.max(...arr);
};
