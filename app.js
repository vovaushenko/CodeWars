const subsetsWithDup = (nums) => {
	nums.sort((a, b) => a - b);
	let res = [];

	const generateSubsets = (arr, curr) => {
		res.push([...curr]);

		for (let i = 0; i < arr.length; i++) {
			if (i === 0 || arr[i] !== arr[i - 1]) {
				curr.push(arr[i]);

				generateSubsets(arr.slice(i + 1), curr);
				curr.pop();
			}
		}
	};

	generateSubsets(nums, []);

	return res;
};

console.log(subsetsWithDup([1, 2, 3]));
