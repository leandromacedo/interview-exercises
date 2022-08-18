function createLinkedListNode(value, next) {
    return {
        value,
        next,
    }
}

function linkedListToArray(list) {
    let node = list
    const arr = []
    while (node.next) {
        arr.push(node.value)
        node = node.next
    }
    arr.push(node.value)

    return arr
}

class Graph {
    constructor() {
        this.adjacencyList = new Map()
    }

    addPaths(vertex, edges = []) {
        this.adjacencyList.set(vertex, edges)
    }

    addPath(vertex, edge) {
        const currentPaths = this.getPaths(vertex)

        this.addPaths(vertex, [...currentPaths, edge])
    }

    getPaths(vertex) {
        return this.adjacencyList.get(vertex)
    }
    get size() {
        return this.adjacencyList.size
    }
}

const BST_LEFT = 0
const BST_RIGHT = 1

class TreeNode {
    constructor(value, descendants = []) {
        this.value = value
        this.descendants = descendants
        this.marked = false
        this.parent = null
    }

    get left() {
        return this.descendants[BST_LEFT]
    }

    get right() {
        return this.descendants[BST_RIGHT]
    }

    set left(node) {
        this.descendants[BST_LEFT] = node
        node.parent = this
    }

    set right(node) {
        this.descendants[BST_RIGHT] = node
        node.parent = this
    }
}

class Queue {
    constructor() {
        this.elements = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(value) {
        this.elements[this.tail] = value
        this.tail++
    }

    dequeue() {
        const item = this.elements[this.head]
        delete this.elements[this.head]
        this.head++

        return item
    }

    peek() {
        return this.elements[this.head]
    }

    get length() {
        return this.tail - this.head
    }

    isEmpty() {
        return this.length
    }

}

export {
    createLinkedListNode,
    linkedListToArray,

    Graph,
    TreeNode,
    Queue,
}