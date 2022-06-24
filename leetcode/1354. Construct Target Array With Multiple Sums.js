//1354. Construct Target Array With Multiple Sums

const isPossible = (target) => {
	let isPoss = false;
	const helper = (nums) => {
		if (nums.every((num) => num === 1)) {
			return (isPoss = true);
		}

		const max = Math.max(...nums);
		const maxId = nums.indexOf(max);
		const left = nums.slice(0, maxId).reduce((a, b) => a + b, 0);
		const right = nums.slice(maxId + 1).reduce((a, b) => a + b, 0);

		nums[maxId] = nums[maxId] - left - right;
		if (nums[maxId] <= 0) return (isPoss = false);
		helper(nums);
	};

	helper(target);
	return isPoss;
};

const isPossible2 = (target) => {
	if (target.length == 1) {
		return target[0] === 1;
	}

	while (true) {
		target.sort((a, b) => b - a);
		let nm = target[0];
		let total = 0;
		for (let n of target) {
			total += n;
		}
		let rest = total - nm;
		if (rest === 1 || total === target.length) {
			return true;
		}
		let x = nm % rest;

		if (x === 0 || x === nm) {
			return false;
		}
		target[0] = x;
	}
};
