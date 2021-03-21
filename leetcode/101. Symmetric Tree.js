// 101. Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
const isSymmetric = (root) => {
  if (!root) return true;
  return compare(root.left, root.right);
};

const compare = (leftNode, rightNode) => {
  if (!leftNode && !rightNode) return true;
  if (!leftNode || !rightNode) return false;
  if (leftNode.val !== rightNode.val) return false;

  return compare(leftNode.left, rightNode.right) && compare(leftNode.right, rightNode.left);
};
