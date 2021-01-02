const tree = {
    value: 10,
    left: { value: 1, left: null, right: null },
    right: { value: 2, left: null, right: null },
};

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

sumTheTreeValues(tree);
