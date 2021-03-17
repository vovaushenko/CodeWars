// 100. Same Tree
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

const isSameTree = (root1, root2) => {
  if (!root1 && !root2) return true;

  if (!root1 || !root2 || root1.val !== root2.val) return false;

  return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
};
