import * as utils from './utils.js'

// If there is a ref intersection, the tail will be the same
// So the idea is to align both list by the end and find the
// first intersection
const intersection = (list1, list2) => {
    const listLen1 = utils.getLength(list1)
    const listLen2 = utils.getLength(list2)

    const lenDiff = listLen1 - listLen2
    let longerList = list1
    let shorterList = list2
    if (lenDiff < 0) {
        longerList = list2
        shorterList = list1
    }

    let listGap = Math.abs(lenDiff)

    while (longerList && shorterList) {
        if (listGap > 0) {
            longerList = longerList.next
            listGap--
            continue
        }

        if (shorterList === longerList) {
            return shorterList
        } else {
            shorterList = shorterList.next
            longerList = longerList.next
        }
    }

    return false
}


let tests = [
    { list1: [7, 1, 6], list2: [5, 9, 2], common: [] },
    { list1: [7, 1, 6], list2: [7, 1, 6], common: [] },
    { list1: [1, 5, 9], list2: [2, 3, 6, 7], common: [3]},
    { list1: [9, 1], list2: [1], common: [1, 3, 5]},
    { list1: [9], list2: [1], common: [9] },
]

tests.forEach(test => {
    let lcommon = utils.arrayToLinkedList(test.common)
    let llist1 = utils.arrayToLinkedList(test.list1, lcommon)
    let llist2 = utils.arrayToLinkedList(test.list2, lcommon)

    let intersections = intersection(llist1, llist2)

    console.log(utils.linkedListToArray(intersections))
})
