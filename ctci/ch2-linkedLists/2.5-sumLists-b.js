import * as utils from './utils.js';
// O(n)
// It could be also possible to invert the lists
const sumLists = (list1, list2) => {

    // Prepare length of lists to be on same size
    let listLen1 = utils.getLength(list1)
    let listLen2 = utils.getLength(list2)

    while (listLen1 !== listLen2) {
        if (listLen1 < listLen2) {
            list1 = utils.createNode(0, list1)
            listLen1 = utils.getLength(list1)
        } else {
            list2 = utils.createNode(0, list2)
            listLen2 = utils.getLength(list2)
        }

    }

    let sumList = utils.createNode(null, null)

    if ((list1?.val + list2?.val) >= 10) {
        sumList = utils.createNode(1, null)
    }
    const sumListHead = sumList

    let sumResultByDigit = 0
    let remainder = 0

    let leadingList = list1

    while (leadingList) {
        let remainderCheckList1 = list1.next
        let remainderCheckList2 = list2.next

        let isFullyChecked = false
        while(!isFullyChecked) {
            let remainderCheck = remainderCheckList1?.val + remainderCheckList2?.val
            if (remainderCheck > 9) {
                remainder = 1
                isFullyChecked = true
            } else if (remainderCheck === 9) {
                remainderCheckList1 = remainderCheckList1.next
                remainderCheckList2 = remainderCheckList2.next
            } else {
                remainder = 0
                isFullyChecked = true
            }
        }

        sumResultByDigit = ((list1?.val + list2?.val) + remainder) % 10

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
    { list1: [7, 1, 6], list2: [5, 9, 2] }, //1308
    { list1: [1, 5, 9], list2: [2, 3, 6, 7] }, //2626
    { list1: [9, 1], list2: [1] }, //92
    { list1: [9], list2: [1] }, //10
    { list1: [9, 7, 8], list2: [6, 8, 5] }, //1663
    { list1: [9, 9, 0, 1], list2: [1] }, //9902
    { list1: [1], list2: [9, 9, 0, 1] }, //9902
    { list1: [9, 1], list2: [1, 9, 9, 9] }, //2090
]

tests.forEach(test => {
    let llist1 = utils.arrayToLinkedList(test.list1)
    let llist2 = utils.arrayToLinkedList(test.list2)
    let sumLinkedList = sumLists(llist1, llist2)

    console.log(utils.linkedListToArray(sumLinkedList))
})