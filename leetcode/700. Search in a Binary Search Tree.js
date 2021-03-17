// 700. Search in a Binary Search Tree
// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

var searchBST = function (root, val) {
  if (!root) return null;
  let queue = [root];
  let node;

  while (queue.length) {
    node = queue.shift();
    if (node.val === val) return node;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return null;
};
