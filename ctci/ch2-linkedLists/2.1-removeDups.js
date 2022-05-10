import * as utils from './utils.js';

// O(n)
const removeDups = head => {
    if (!head) return head

    let linkedList = new Set()
    let node = head

    linkedList.add(node.val)
    while(node.next) {
        if (linkedList.has(node.next.val)) {
            node.next = node.next.next
        } else {
            linkedList.add(node.next.val)
            node = node.next
        }
    }

    return linkedList
}

const list = utils.arrayToLinkedList([6,5,5,4]);
console.log(removeDups(list))

// Without buffer O(n2), but O(1) in space
const removeDupsNoBuffer = head => {
    if (!head) return head

    let current = head
    while (current.next) {
        let runner = current
        while (runner.next) {
            if (runner.next.val === current.val) {
                runner.next = runner.next.next
            } else {
                runner = runner.next
            }
        }
        current = current.next
    }

    return head
}

const list2 = utils.arrayToLinkedList([6, 5, 5, 4, 2, 4, 7]);
console.log(utils.linkedListToArray(removeDupsNoBuffer(list2)))