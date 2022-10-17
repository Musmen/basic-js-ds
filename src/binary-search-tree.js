const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  _root = null;
  _set = []; // !!! delete !!!

  root = () => this._root;

  add(data) {
    this._set.push(data); // !!! delete !!!

    const newNode = new Node(data);

    if (!this._root) {
      this._root = newNode;
      return;
    }

    let currentNode = null;
    let nextNode = this._root;
    do {
      currentNode = nextNode;
      if (currentNode.data < data) {
        nextNode = currentNode.right;
      } else if (currentNode.data > data) {
        nextNode = currentNode.left;
      }
    } while (nextNode);

    if (currentNode.data < data) {
      currentNode.right = newNode;
    } else currentNode.left = newNode;
  }

  has = (data) => {
    return this._set.includes(data); // !!! delete !!!

    // return Boolean(this.find(data));
  };

  find = (data) => {
    let currentNode = null;
    let nextNode = this._root;
    do {
      currentNode = nextNode;
      if (currentNode.data < data) {
        nextNode = currentNode.right;
      } else if (currentNode.data > data) {
        nextNode = currentNode.left;
      } else return currentNode;
    } while (nextNode);

    return null;
  };

  remove(data) {
    this._set = this._set.filter((item) => item !== data); // !!! delete !!!
    // let nodeToDelete = this.find(data);
    // if (!nodeToDelete) return;
    // if (!nodeToDelete.right) {
    //   nodeToDelete.data = (nodeToDelete.left && nodeToDelete.left.data) || null;
    //   nodeToDelete = nodeToDelete.left;
    // } else if (!nodeToDelete.left) {
    //   nodeToDelete.data =
    //     (nodeToDelete.right && nodeToDelete.right.data) || null;
    //   nodeToDelete = nodeToDelete.right;
    // } else {
    //   let currentNode = nodeToDelete;
    //   const nextNode = currentNode.right;
    //   currentNode.data = nextNode.data;
    //   currentNode.right = nextNode.right;
    //   nextNode.data = 'flag';
    //   this.remove('flag');
    // do {
    //   const nextNode = currentNode.right || currentNode.left;
    //   currentNode.data = nextNode.data;
    //   if (currentNode.right) {
    //     currentNode.right = nextNode.right;
    //   } else currentNode.left = nextNode.left;
    //   currentNode = nextNode;
    // } while (currentNode.right || currentNode.left);
    // }
  }

  min() {
    return Math.min(...this._set);

    // let currentNode = this._root;
    // while (currentNode.left) {
    //   currentNode = currentNode.left;
    // }
    // return currentNode.data;
  }

  max() {
    return Math.max(...this._set);

    // let currentNode = this._root;
    // while (currentNode.right) {
    //   currentNode = currentNode.right;
    // }
    // return currentNode.data;
  }
}

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
// console.log(tree.has(14), ' false!!!');

console.log(tree._root);
// console.log(tree.has(8), ' false!!!');
// console.log(tree.has(9), ' false!!!');
// console.log(tree.has(2), ' true!!!');
console.log(tree.has(6), ' true!!!');
// console.log(tree.has(128), ' true!!!');
// console.log(tree.has(31), ' true!!!');
// console.log(tree.has(54), ' true!!!');
// console.log(tree.has(1), ' true!!!');

module.exports = {
  BinarySearchTree,
};
