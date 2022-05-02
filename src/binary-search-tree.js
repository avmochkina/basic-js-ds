const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
class BinarySearchTree {
	constructor() {
		this.Root = null;
	}

  	root() {
		return this.Root;
  	}

  	add(value) {
    	this.Root = addInside(this.Root, value);
    
    	function addInside(node, value) {
    		if (!node) {
        		return new Node(value);
        	}
        	if (value === node.value) {
        		return node;
      		}
      		if (value < node.value) {
        		node.left = addInside(node.left, value);
      		} else {
        		node.right = addInside(node.right, value);
      		}
      		return node;
		}
  	}

  	has(value) {
    	return searchInside(this.Root, value);

		function searchInside(node, value) {
			if (!node){
				return false;
			}
			if (value === node.value) {
				return true;
			}
			if (value < node.value) {
				node.left = searchInside(node.left, value);
		  	} else {
				node.right = searchInside(node.right, value);
			}
		}
  	}

  	find(value) {
		return findInside (this.Root, value);

		function findInside(node, value) {
			if (!node){
				return false;
			}
			if (value === node.value) {
				return value;
			}
			if (value < node.value) {
				node.left = findInside(node.left, value);
		  	} else {
				node.right = findInside(node.right, value);
			}
		}
    }

  	remove(value) {
    	this.Root = removeNode(this.Root, value);

		function removeNode(node, value) {
			if (!node){
				return null;
			}
			if (value < node.value) {
				node.left = removeNode(node.left, value);
				return node;
			} else if (value > node.value) {
				node.right = removeNode(node.right, value);
				return node;
			} else {
				if (!node.left && !node.right) {
					return null;
				}
				if (!node.left) {
					node = node.right;
					return node;
				}
				if (!node.right) {
					node = node.left;
					return node;
				}
				let minFromRight = node.right;
				while (minFromRight.left) {
					minFromRight = minFromRight.left;
				}
				node.value = minFromRight.value;
				node.right = removeNode(node.right, minFromRight.value);
				return node;
			}
		}
    }

  	min() {
		if (!this.Root) {
			return;
		}
		let node = this.Root;
		while (node.left) {
			node = node.left;
		}
		return node.value;
  	}

  	max() {
		if (!this.Root) {
			return;
		}
		let node = this.Root;
		while (node.right) {
			node = node.right;
		}
		return node.value;
  	}
}

module.exports = {
  BinarySearchTree
};
