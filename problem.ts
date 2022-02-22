export { foo };
// goal 10 -> 4
const foo = () => 'bar';

const removeElement = (nums: number[], target): number => {
	for (let i = nums.length - 1; i >= 0; i--) {
		nums[i] === target && nums.splice(i, 1);
	}
	return nums.length;
};

console.log(removeElement([1, 2, 2, 2, 3, 2, 4], 2));
