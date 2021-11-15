// https://leetcode.com/problems/subtree-of-another-tree/

/*
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
*/

const stringifyTree = (root) => {
	let serialization = ',';
	const traverse = (node) => {
		serialization += ',' + node.val + ',';
		node.left ? traverse(node.left) : (serialization += 'null' + ',');
		node.right ? traverse(node.right) : (serialization += 'null' + ',');
	};
	traverse(root);
	return serialization;
};

const isSubtree = (r1, r2) => {
	const str1 = stringifyTree(r1);
	const str2 = stringifyTree(r2);
	console.log(str1);
	console.log(str2);
	return str1.includes(str2);
};
