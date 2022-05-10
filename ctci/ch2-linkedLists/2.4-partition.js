import * as utils from './utils.js';

// O(n)
const partition = (head, refValue) => {
    let newHead = utils.createNode(head.val, null)
    let headTipCursor = newHead
    let tailCursor = null
    let node = head.next

    while(node) {
        if (node.val >= refValue) {
            if(!tailCursor) {
                tailCursor = utils.createNode(node.val, null)
            }
            tailCursor = utils.createNode(node.val, tailCursor)
        } else {
            newHead = utils.createNode(node.val, newHead)
        }
        node = node.next
    }
    headTipCursor.next = tailCursor

    return newHead
}

let tests = [
    { list: [3, 5, 8, 5, 10, 2, 4, 10, 3, 3, 1], ref: 4 },
    { list: [5, 8, 7, 4, 9, 15, 30], ref: 31 },
    { list: [5, 8, 7, 4, 9, 15, 30], ref: 3 },
    { list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30], ref: 2 },
    { list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30], ref: 7 },
    { list: [4, 9, 15, 30, 5, 8, 3, 2, 2, 3, 7, 1, 15, 5, 6, 7], ref: 6 },
    { list: [4, 9, 15, 30, 5, 8, 3, 2, 2, 3, 7, 1, 15, 5, 6, 7], ref: 17 },
    { list: [4, 9, 15, 30, 5, 8, 20, 25, 20, 21, 21, 7, 1, 15, 5, 6, 7], ref: 14 }
]

tests.forEach(test => {
    let list = utils.arrayToLinkedList(test.list);
    let newList = partition(list, test.ref)
    console.log(utils.linkedListToArray(newList))
})