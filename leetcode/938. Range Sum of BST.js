// 938. Range Sum of BST
// Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].

var rangeSumBST = function (root, low, high) {
  const queue = [root];
  let node;
  let rangeSum = 0;

  while (queue.length) {
    node = queue.shift();
    if (node.val >= low && node.val <= high) rangeSum += val;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return rangeSum;
};
