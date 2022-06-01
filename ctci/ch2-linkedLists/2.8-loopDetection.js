import * as utils from './utils.js'

const loopDetection = list => {
    let slowCursor = list
    let fastCursor = list.next
    let headCursor = list

    let canContinue = true
    let hasCollided = false

    // Collision point means fast pointer is
    // mod(k steps, loop size) distant from slow pointer
    // Setting a new cursor in head means more k steps to recollide
    while (canContinue && fastCursor?.next) {
        slowCursor = slowCursor.next
        fastCursor = fastCursor.next.next
        if (hasCollided) headCursor = headCursor.next

        if (slowCursor === fastCursor) {
            hasCollided = true
        }

        if (headCursor === slowCursor) {
            return headCursor
        }

    }

    return false
}

let tests = [
    { list: [1, 2, 3], ref: 1 },
    { list: [3, 5, 8, 5, 10, 2, 4, 10, 3, 3, 1], ref: 4 },
    { list: [5, 8, 7, 4, 9, 15, 30], ref: 2 },
    { list: [5, 8, 7, 4, 9, 15, 30], ref: 0 },
    { list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30], ref: 2 },
    { list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30], ref: 0 },
    { list: [4, 9, 15, 30, 5, 8, 3, 2, 2, 3, 7, 1, 15, 5, 6, 7], ref: 6 },
    { list: [4, 9, 15, 30, 5, 8, 3, 2, 2, 3, 7, 1, 15, 5, 6, 7], ref: 1 },
    { list: [4, 9, 15, 30, 5, 8, 20, 25, 20, 21, 21, 7, 1, 15, 5, 6, 7], ref: 2 }
]

tests.forEach(test => {
    let list = utils.arrayToLoopedList(test.list, test.ref)

    let node = loopDetection(list)
    console.log(node)
    // let list = utils.arrayToLinkedList(test.list);
    // let newList = partition(list, test.ref)
    // console.log(utils.linkedListToArray(newList))
})