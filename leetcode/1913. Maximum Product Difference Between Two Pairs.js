// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/

// 1913. Maximum Product Difference Between Two Pairs

const maxProductDifference = (nums) => {
	let sorted = [...nums].sort((a, b) => a - b);
	return (
		sorted[sorted.length - 1] * sorted[sorted.length - 2] -
		sorted[0] * sorted[1]
	);
};
