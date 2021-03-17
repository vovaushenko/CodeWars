// 671. Second Minimum Node In a Binary Tree
// Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.

// Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

// If no such second minimum value exists, output -1 instead.

const findSecondMinimumValue = (root) => {
  const values = [];
  const traverse = (node) => {
    values.push(node.val);

    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(root);

  const unique = [...new Set(values)].sort((a, b) => a - b);
  if (unique.length < 2) return -1;

  return unique[1];
};
