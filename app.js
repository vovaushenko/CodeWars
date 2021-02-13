// BST

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  BFS() {
    let values = [];
    let queue = [this.root];
    let node;

    while (queue.length) {
      node = queue.shift();
      values.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return values;
  }

  DFS() {
    let values = [];

    const traverse = (node) => {
      node.left && traverse(node.left);
      values.push(node.val);
      node.right && traverse(node.right);
    };

    traverse(this.root);

    return values;
  }

  includes(val) {
    let found = false;
    const traverse = (node) => {
      if (!node) return;
      if (val === node.val) {
        found = true;
        return;
      }
      val > node.val ? traverse(node.right) : traverse(node.left);
    };

    traverse(this.root);

    return found;
  }
}

let tree = new BinarySearchTree();
tree.insert(12);
tree.insert(10);
tree.insert(14);
tree.insert(11);
tree.insert(8);
tree.insert(13);
tree.insert(22);

console.log(tree.includes(22));
