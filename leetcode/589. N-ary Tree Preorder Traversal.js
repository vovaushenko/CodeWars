// 589. N-ary Tree Preorder Traversal

const preorder = (root) => {
  const values = [];
  const queue = [root];
  let node;

  while (queue.length) {
    let current = queue[0];
    queue.shift();
    if (!current) continue;
    values.push(current.val);
    queue.unshift(...current.children);
  }

  return values;
};
