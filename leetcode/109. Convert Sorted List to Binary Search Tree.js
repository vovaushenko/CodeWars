// 109. Convert Sorted List to Binary Search Tree
/*
Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
*/

const sortedArrayToBST = (nums) => {
	if (!nums.length) return null;
	const mid = Math.floor(nums.length / 2);
	const rootNode = new TreeNode(nums[mid]);
	rootNode.left = sortedArrayToBST(nums.slice(0, mid));
	rootNode.right = sortedArrayToBST(nums.slice(mid + 1));
	return rootNode;
};

const getListValues = (head) => {
	const values = [];
	while (head) {
		values.push(head.val);
		head = head.next;
	}
	return values;
};

const sortedListToBST = (head) => sortedArrayToBST(getListValues(head));
