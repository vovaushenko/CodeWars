// https://www.codewars.com/kata/555624b601231dc7a400017a

const josephusSurvivor = (n, k) => {
	const circle = Array.from({ length: n }, (_, id) => ++id);
	let count = 0;
	let index = 0;
	let res;

	const helper = (nums) => {
		if (nums.length <= 3) {
			res = nums;
			return;
		}

		if (count === k) {
			console.log(nums);
			nums = [...nums.slice(0, index), ...nums.slice(index + 1)];
			count = 0;
		}

		if (index === nums.length) {
			index = 0;
		}
		count++;
		index++;
		helper(nums);
	};

	helper(circle);

	return res;
};
