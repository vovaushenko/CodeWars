// 152. Maximum Product Subarray
/*
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.
*/

const maxProduct = (nums: number[]): number => {
	let maxProduct = -Infinity;

	for (let i = 0; i < nums.length; i++) {
		let tempProd = 1;
		for (let j = i; j < nums.length; j++) {
			tempProd *= nums[j];

			maxProduct = Math.max(tempProd, maxProduct);
		}
	}

	return maxProduct;
};
