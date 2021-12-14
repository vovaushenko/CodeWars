const rangeSumBST = (root, low, high) => {
	if (!root) return;
	let sum = 0;
	const { val } = root;
	if (val >= low && val <= high) sum += val;
	return rangeSumBST(root.left) + rangeSumBST(root.right);
};
