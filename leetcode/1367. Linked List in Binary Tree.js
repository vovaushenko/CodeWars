// 1367. Linked List in Binary Tree
/*
Given a binary tree root and a linked list with head as the first node. 

Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False.

In this context downward path means a path that starts at some node and goes downwards.
*/

const getSLLpath = (head) => {
	let path = '';
	let current = head;
	while (current) {
		path += current.val;
		current = current.next;
	}
	return path;
};

const isSubPath = (head, root) => {
	const listPath = getSLLpath(head);
	let result = false;

	const traverse = (node, treePath) => {
		treePath += node.val;
		if (treePath.includes(listPath)) {
			result = true;
			return;
		}

		node.left && traverse(node.left, treePath);
		node.right && traverse(node.right, treePath);
	};

	traverse(root, '');
	return result;
};
