// https://www.codewars.com/kata/5714803d2817ffce17000a35

const findAB = (nums, c) => {
	for (let i = 0; i < nums.length; i++) {
		if (nums.slice(i + 1).includes(c / nums[i]))
			return [nums[i], c / nums[i] === -0 ? 0 : c / nums[i]];
	}
	return null;
};
