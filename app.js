const findSecondMinimumValue = (root, smallest = [Infinity, Infinity]) => {
	if (!root) return;

	if (!smallest.includes(root.val) && root.val < smallest[1]) {
		smallest.pop();
		smallest.push(root.val);
		smallest.sort((a, b) => a - b);
	}

	root.left && findSecondMinimumValue(root.left, smallest);
	root.right && findSecondMinimumValue(root.right, smallest);

	console.log(smallest);

	return smallest[1];
};

console.log(findSecondMinimumValue({ val: 5 }));
