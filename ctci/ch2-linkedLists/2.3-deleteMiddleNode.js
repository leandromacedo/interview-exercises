import * as utils from './utils.js';

// O(n)
const deleteMiddleNode = node => {
    if (!node) return node

    node.val = node.next.val
    node.next = node.next.next
}

let list = utils.arrayToLinkedList([6, 5, 5, 4])
let node = list.next.next
deleteMiddleNode(node)
console.log(list)