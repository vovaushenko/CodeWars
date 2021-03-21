// 129. Sum Root to Leaf Numbers
// You are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.

// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers.

// A leaf node is a node with no children.

const sumNumbers = (root) => {
  let sum = 0;

  const traverse = (node, tempNum) => {
    if (!node) return;
    tempNum += node.val;
    if (!node.left && !node.right) {
      sum += +tempNum;
      return;
    }
    traverse(node.left, tempNum);
    traverse(node.right, tempNum);
  };

  traverse(root, '');

  return sum;
};
