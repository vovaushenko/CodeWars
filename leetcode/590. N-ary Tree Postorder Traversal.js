// 590. N-ary Tree Postorder Traversal

// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

const postorder = (root) => {
  const values = [];

  const traverse = (node) => {
    if (!node) return;

    for (let child of node.children) traverse(child);
    values.push(node.val);
  };

  traverse(root);

  return values;
};
