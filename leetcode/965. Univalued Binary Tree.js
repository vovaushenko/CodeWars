// 965. Univalued Binary Tree
// A binary tree is univalued if every node in the tree has the same value.

// Return true if and only if the given tree is univalued.

var isUnivalTree = function (root) {
  if (!root) return true;
  const ref = root.val;
  let queue = [root];
  let node;

  while (queue.length) {
    node = queue.shift();
    if (node.val !== ref) return false;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return true;
};
