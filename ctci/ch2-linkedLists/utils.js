const createNode = (val, next) => {
    return {
        val,
        next,
    }
}

const arrayToLinkedList = arr => {
    if (arr.length === 0) {
        return null
    }

    let list = createNode(arr[arr.length - 1], null)
    for (let i = arr.length - 2; i >= 0; i--) {
        list = createNode(arr[i], list)
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
    linkedListToArray,
    getLength
}