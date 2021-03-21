// 1022. Sum of Root To Leaf Binary Numbers

// You are given the root of a binary tree where each node has a value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

// Return the sum of these numbers. The answer is guaranteed to fit in a 32-bits integer.

const sumRootToLeaf = (root) => {
  let res = [];

  const traverse = (node, tempBin) => {
    if (!node) return;

    tempBin += node.val;
    if (!node.left && !node.right) {
      res.push(tempBin);
      return;
    }

    traverse(node.left, tempBin);
    traverse(node.right, tempBin);
  };

  traverse(root, '');

  return res.reduce((sum, bin) => sum + parseInt(bin, 2), 0);
};
