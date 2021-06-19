// 108. Convert Sorted Array to Binary Search Tree

/*
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
*/

const sortedArrayToBST = (nums) => {
	if (!nums.length) return null;

	let mid = ~~(nums.length / 2);

	let root = new TreeNode(nums[mid]);

	root.left = sortedArrayToBST(nums.slice(0, mid));
	root.right = sortedArrayToBST(nums.slice(mid));

	return root;
};
