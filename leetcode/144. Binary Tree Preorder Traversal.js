// 144. Binary Tree Preorder Traversal

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

const preorderTraversal = (root) => {
  let values = [];

  const traverse = (node) => {
    if (!node) return;

    values.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(root);

  return values;
};
