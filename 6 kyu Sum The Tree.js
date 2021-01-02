// https://www.codewars.com/kata/5800580f8f7ddaea13000025

const sumTheTreeValues = (root) => {
    let values = [];

    const traverse = (node) => {
        values.push(node.value);

        node.left && traverse(node.left);
        node.right && traverse(node.right);
    };

    traverse(root);

    return values.reduce((a, b) => a + b, 0);
};
