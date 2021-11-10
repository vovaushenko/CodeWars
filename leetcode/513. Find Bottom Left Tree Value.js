// 513. Find Bottom Left Tree Value
/*
Given the root of a binary tree, return the leftmost value in the last row of the tree.
*/

const findBottomLeftValue = (root) => {
	let temp = {
		max: 1,
		leftbottom: root.val,
	};
	return helper(root, 1, temp);
};

const helper = (root, level, temp) => {
	if (temp.max < level) {
		temp.max = level;
		temp.leftbottom = root.val;
	}

	if (root.left) {
		helper(root.left, level + 1, temp);
	}
	if (root.right) {
		helper(root.right, level + 1, temp);
	}

	return temp.leftbottom;
};
