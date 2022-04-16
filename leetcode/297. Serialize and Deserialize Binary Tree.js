//297. Serialize and Deserialize Binary Tree
/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
*/
const serialize = (root) => {
	let data = [];

	const traverse = (node) => {
		if (!node) return data.push(null);
		data.push(node.val);
		traverse(node.left);
		traverse(node.right);
	};

	traverse(root);
	return data;
};

const deserialize = (data) => {
	const traverse = () => {
		if (!data.length) return;

		const val = data.shift();
		if (val == null) return null;

		const node = new TreeNode(val);
		node.left = traverse();
		node.right = traverse();
		return node;
	};

	return traverse();
};
