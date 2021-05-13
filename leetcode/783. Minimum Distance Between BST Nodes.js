// 783. Minimum Distance Between BST Nodes
/*

Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.
*/

const minDiffInBST = (root) => {
	const values = [];
	const traverseBST = (node) => {
		if (!node) return;
		values.push(node.val);
		if (node.left) traverseBST(node.left);
		if (node.right) traverseBST(node.right);
	};

	traverseBST(root);
	return findMinDiff(values);
};

const findMinDiff = (arr) => {
	arr.sort().sort((a, b) => a - b);
	let [i, j] = [0, 1];
	let minDiff = Infinity;
	let tempDiff;
	while (j < arr.length) {
		tempDiff = arr[j] - arr[i];
		minDiff = Math.min(tempDiff, minDiff);
		i++;
		j++;
	}

	return minDiff;
};
