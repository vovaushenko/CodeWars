// 404. Sum of Left Leaves

const sumOfLeftLeaves = (root) => {
  let sum = 0;

  const traverse = (node) => {
    if (!node) return;
    if (node.left) {
      sum += node.left.val;
      traverse(node.left);
    }

    if (node.right) traverse(node.right);
  };

  traverse(root);

  return sum;
};
