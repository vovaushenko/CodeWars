//1726. Tuple with Same Product
/*
Given an array nums of distinct positive integers, return the number of tuples (a, b, c, d) such that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d.
*/
const tupleSameProduct = (nums) => {
	const products2 = new Map();

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (i !== j) {
				const product = nums[j] * nums[i];

				products2.has(product)
					? products2.get(product).push([nums[i], nums[j]].join('*'))
					: products2.set(product, [`${nums[i]}*${nums[j]}`]);
			}
		}
	}
	let res = 0;

	for (let [_, val] of products2) {
		res += val.length * (val.length - 2);
	}

	return res;
};
