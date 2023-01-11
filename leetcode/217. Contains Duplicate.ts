function containsDuplicate(nums: number[]): boolean {
	return [...new Set(nums)].length !== nums.length;
}
