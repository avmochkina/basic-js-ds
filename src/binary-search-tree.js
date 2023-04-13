//const { NotImplementedError } = require('../extensions/index.js');


const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = new Node(data);

        if (!this.root) {
        this.root = node;
        return;
        }

        let current = this.root;
        while (true) {
            if (data === current.data) {
                return;
            }

            if (data < current.data) {
                if (!current.left) {
                    current.left = node;
                    return;
                }

                current = current.left;
            } else {
                if (!current.right) {
                    current.right = node;
                    return;
                }

                current = current.right;
            }
        }
    }

    has(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
            return true;
            }

            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    find(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return current;
            }

            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return null;
    }

    remove(data) {
        const removeNode = (node, data) => {
            if (!node) {
                return null;
            }

            if (data === node.data) {
                if (!node.left && !node.right) {
                    return null;
                }

                if (!node.left) {
                    return node.right;
                }

                if (!node.right) {
                    return node.left;
                }

                let temp = node.right;
                while (temp.left) {
                    temp = temp.left;
                }

                node.data = temp.data;
                node.right = removeNode(node.right, temp.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };

        this.root = removeNode(this.root, data);
    }

    min() {
        if (!this.root) {
            return null;
        }

        let current = this.root;
        while (current.left) {
            current = current.left;
        }

        return current.data;
    }

    max() {
        if (!this.root) {
            return null;
        }

        let current = this.root;
        while (current.right) {
            current = current.right;
        }

        return current.data;
    }
}


module.exports = {
  BinarySearchTree
};
