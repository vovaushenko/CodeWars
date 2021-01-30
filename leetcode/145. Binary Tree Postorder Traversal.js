// 145. Binary Tree Postorder Traversal

// Given the root of a binary tree, return the postorder traversal of its nodes' values.

const postorderTraversal = (root) => {
  const values = [];

  const traverse = (node) => {
    if (!node) return;
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    values.push(node.val);
  };

  traverse(root);

  return values;
}; // 145. Binary Tree Postorder Traversal

// Given the root of a binary tree, return the postorder traversal of its nodes' values.

const postorderTraversal = (root) => {
  const values = [];

  const traverse = (node) => {
    if (!node) return;
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    values.push(node.val);
  };

  traverse(root);

  return values;
};

var postorderTraversalIterative = function (root) {
  if (!root) return [];

  const stack = [root];
  const result = [];
  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return result.reverse();
};

// Runtime: 64 ms, faster than 99.19% of JavaScript online submissions for Binary Tree Postorder Traversal.
// Memory Usage: 38.9 MB, less than 13.05% of JavaScript online submissions for Binary Tree Postorder Traversal.

// Runtime: 64 ms, faster than 99.19% of JavaScript online submissions for Binary Tree Postorder Traversal.
// Memory Usage: 38.9 MB, less than 13.05% of JavaScript online submissions for Binary Tree Postorder Traversal.
