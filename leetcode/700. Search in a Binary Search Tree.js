// 700. Search in a Binary Search Tree
// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

const searchBST = (root, val) => {
  let foundNode;

  const traverse = (node) => {
    if (node.val === val) {
      foundNode = node;
      return;
    }
    if (!node.left || !node.right) {
      return;
    }
    node.val > val && traverse(node.left);
    node.val < val && traverse(node.right);
  };

  traverse(root);

  if (!foundNode) return null;

  let subtree = [];
  let queue = [foundNode];
  let node;

  while (queue.length) {
    node = queue.shift();
    subtree.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return subtree;
};
