import * as utils from './utils.js';
// O(n)
const sumLists = (list1, list2) => {
    let sumList = utils.createNode(null, null)
    const sumListHead = sumList

    let sumResultByDigit = 0
    let remainder = 0

    let leadingList = list1
    while (leadingList) {
        sumResultByDigit = (list1?.val + list2?.val) + remainder
        if (sumResultByDigit >= 10) {
            remainder = 1
            sumResultByDigit = sumResultByDigit - 10
        } else {
            remainder = 0
        }

        if (sumList.val === null) {
            sumList.val = sumResultByDigit
        } else {
            sumList.next = utils.createNode(sumResultByDigit, null)
            sumList = sumList.next
        }

        if (!list1.next) {
            list1.val = 0
            leadingList = list2.next
        }
        else {
            leadingList = list1.next
            list1 = list1.next
        }

        if (!list2.next) list2.val = 0
        else list2 = list2.next
    }

    if(remainder === 1) {
        sumList.next = utils.createNode(remainder, null)
    }

    return sumListHead
}

let tests = [
    { list1: [7, 1, 6], list2: [5, 9, 2] },
    { list1: [1, 5, 9], list2: [2, 3, 6, 7] },
    { list1: [9, 1], list2: [1] },
    { list1: [9], list2: [1] },
    { list1: [9, 7, 8], list2: [6, 8, 5] },
    { list1: [9, 9, 0, 1], list2: [1] },
    { list1: [1], list2: [9, 9, 0, 1] },
]

tests.forEach(test => {
    let llist1 = utils.arrayToLinkedList(test.list1)
    let llist2 = utils.arrayToLinkedList(test.list2)
    let sumLinkedList = sumLists(llist1, llist2)

    console.log(utils.linkedListToArray(sumLinkedList))
})