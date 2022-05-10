import * as utils from './utils.js';
// O(n)
const returnKthFromLast = (list, k) => {

    if (!list) {
        throw new Error('invalid list');
    }

    const listSize = utils.getLength(list)
    const stopPoint = listSize - 1 - k

    let index = 0
    let node = list
    while (index < stopPoint) {
        node = node.next
        index++
    }

    return node.val
}


let list = utils.arrayToLinkedList([6, 5, 5, 4])
let k = 0
console.log(returnKthFromLast(list, k))
