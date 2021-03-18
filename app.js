// 589. N-ary Tree Preorder Traversal

const preorder = (root) => {
  const values = [];
  const queue = [root];

  while (queue.length) {
    let current = queue[0];
    queue.shift();
    if (!current) continue;
    values.push(current.val);
    queue.unshift(...current.children);
  }

  return values;
};

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
