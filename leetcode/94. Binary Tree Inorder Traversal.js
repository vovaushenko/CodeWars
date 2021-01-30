//94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

const inorderTraversal = (root) => {
  const values = [];

  const traverse = (node) => {
    if (!node) return;

    if (node.left) traverse(node.left);
    values.push(node.val);
    if (node.right) traverse(node.right);
  };
  traverse(root);
  return values;
};
