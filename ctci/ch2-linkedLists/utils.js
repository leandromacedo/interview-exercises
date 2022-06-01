const createNode = (val, next) => {
    return {
        val,
        next,
    }
}

const arrayToLinkedList = (arr, appendix = null) => {
    if (arr.length === 0) {
        return null
    }

    let list = createNode(arr[arr.length - 1], appendix)
    for (let i = arr.length - 2; i >= 0; i--) {
        list = createNode(arr[i], list)
    }

    return list
}

const arrayToLoopedList = (arr, ref) => {
    if (arr.length === 0) {
        return null
    }

    let list, loopedList
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i === arr.length - 1) {
            list = createNode(arr[arr.length - 1], null)
            if (ref) {
                loopedList = createNode(arr[arr.length - 1], null)
                let tailNode = loopedList

                for (let j = arr.length - 2; j >= arr.length - ref; j--) {
                    loopedList = createNode(arr[j], loopedList)
                }
                tailNode.next = loopedList
            }

            list.next = loopedList
            continue
        }

        list = createNode(arr[i], list)

        if (i === arr.length - ref) {
            list.next = list
        }
    }

    return list
}

const linkedListToArray = list => {
    let node = list
    const arr = []
    while(node.next) {
        arr.push(node.val)
        node = node.next
    }
    arr.push(node.val)

    return arr
}

const getLength = list => {
    let length = 0
    let node = list
    while (node) {
        node = node.next
        length++
    }
    return length
}


export {
    createNode,
    arrayToLinkedList,
    arrayToLoopedList,
    linkedListToArray,
    getLength
}