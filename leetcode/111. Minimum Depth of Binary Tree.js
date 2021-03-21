// 111. Minimum Depth of Binary Tree
// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

const minDepth = (root) => {
  if (!root) return 0;

  let result;

  const traverse = (node, depth) => {
    if (!node.left && !node.right) {
      result = Math.min(result || depth, depth);
    }

    node.left && traverse(node.left, depth + 1);
    node.right && traverse(node.right, depth + 1);
  };

  traverse(root, 1);

  return result;
};
