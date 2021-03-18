const maxDepth = (root) => {
  if (!root) return null;
  const max = Math.max(maxDepth(root.left), maxDepth(root.right));

  return max + 1;
};
