//2265. Count Nodes Equal to Average of Subtree

const getSubtreeSum = (root) => {
	let sum = 0;
	let count = 0;

	```
  const traverse = (node) => {
    if (!node) return;
  
    sum += node.val;
    count++;
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  };
  traverse(root);
  return { sum, count };
  
  ```;
};

const averageOfSubtree = (root) => {
	let res = 0;
	const traverse = (node) => {
		if (!node) return;
		const { sum, count } = getSubtreeSum(node);
		const avg = Math.floor(sum / count);

		if (avg === node.val) res++;

		node.left && traverse(node.left);
		node.right && traverse(node.right);
	};

	traverse(root);
	return res;
};
