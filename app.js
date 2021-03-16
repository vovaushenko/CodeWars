// https://www.codewars.com/kata/5ab363ff6a176b29880000dd

const findTarget = function (root, k) {
  const values = [];

  const traverse = (node) => {
    if (!node) return;
    values.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(root);
  if (values.length < 2) return false;

  return verify(values, k);
};

const verify = (arr, k) => {
  let res = arr.filter((num) => num || num === 0).sort((a, b) => a - b);

  let [i, j] = [0, res.length - 1];
  console.log(res);

  while (i < j) {
    if (res[i] + res[j] === k) return true;
    res[i] + res[j] < k ? i++ : j--;
  }
  return false;
};

console.log(verify([0, -2, 3, null, -1, null, 4], -2));
