// 2089. Find Target Indices After Sorting Array
// Count numbers less and equal to target
// Generate array with length equal to number of equal nums
// Add to each index of array number of lesser numbers
const targetIndices = (nums, target) => {
	let [less, equal] = [0, 0];
	for (const num of nums) {
		if (num < target) less++;
		if (num === target) equal++;
	}
	return Array.from({ length: equal }, (_, id) => id + less);
};
