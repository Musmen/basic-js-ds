const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
const removeKFromList = (l, k) => {
  let currentNode = l;
  let previousNode = null;

  while (currentNode) {
    if (currentNode.value === k) {
      if (currentNode.next) {
        currentNode.value = currentNode.next.value;
        currentNode.next = currentNode.next.next;
      } else {
        if (previousNode) previousNode.next = null;
        currentNode = null;
      }
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  return l;
};

module.exports = {
  removeKFromList,
};
