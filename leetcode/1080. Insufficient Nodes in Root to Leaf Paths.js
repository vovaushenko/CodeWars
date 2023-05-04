var sufficientSubset = function (node, limit, currSum = 0) {
	if (!node.left && !node.right) {
		return node.val + currSum >= limit;
	}

	let [isValidLeft, isValidRight] = [false, false];

	if (node.left)
		isValidLeft = sufficientSubset(node.left, limit, currSum + node.val);
	if (node.right)
		isValidRight = sufficientSubset(node.right, limit, currSum + node.val);

	if (!isValidLeft) node.left = null;
	if (!isValidRight) node.right = null;

	return isValidLeft || isValidRight ? node : null;
};
