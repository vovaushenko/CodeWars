//2171. Removing Minimum Number of Magic Beans
/*
You are given an array of positive integers beans, where each integer represents the number of magic beans found in a particular magic bag.

Remove any number of beans (possibly none) from each bag such that the number of beans in each remaining non-empty bag (still containing at least one bean) is equal. Once a bean has been removed from a bag, you are not allowed to return it to any of the bags.

Return the minimum number of magic beans that you have to remove.
*/
const minimumRemoval = (beans) => {
	const total = beans.reduce((a, b) => a + b, 0);
	const sorted = [...beans].sort((a, b) => a - b);
	let res = Infinity;
	for (let i = 0; i < sorted.length; i++)
		res = Math.min(res, total - sorted[i] * (sorted.length - i));

	return res;
};
