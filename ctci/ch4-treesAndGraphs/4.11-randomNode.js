export class TreeNodeRandom {
    constructor(value, descendants = []) {
        this.value = value
        this.parent = null
        this.marked = false

        this.descendants = descendants

        this.setSizeDownwards()
    }

    setSizeDownwards() {
        this.size = 1 + (this.left?.size || 0) + (this.right?.size || 0)
    }

    setSizeUpwards(size = 1) {
        let parentNode = this.parent

        while (parentNode) {
            parentNode.size += size
            parentNode = parentNode.parent
        }
    }

    get randomNode() {
        const randomInt = Math.ceil(Math.random() * this.size)
        const leftSize = (this.left?.size || 0)
        const rightSize = (this.right?.size || 0)
        let output
        if (randomInt <= leftSize)
            output = this.left.randomNode
        else if (randomInt === (leftSize + 1))
            output = this.value
        else
            output = this.right.randomNode

        if (typeof output === 'undefined')
            debugger

        return output

    }

    get left() {
        return this.descendants[0]
    }

    get right() {
        return this.descendants[1]
    }

    set left(node) {
        this.descendants[0] = node
        node.parent = this

        this.size += node.size
    }

    set right(node) {
        this.descendants[1] = node
        node.parent = this

        this.size += node.size
    }

    insert(value) {
        let currentNode = this
        while (currentNode) {
            if (currentNode.parent) currentNode.parent.size += 1
            if (value <= currentNode.value) {
                if (currentNode.left)
                    currentNode = currentNode.left
                else {
                    currentNode.left = new TreeNodeRandom(value)
                    break
                }
            }
            else {
                if (currentNode.right)
                    currentNode = currentNode.right
                else {
                    currentNode.right = new TreeNodeRandom(value)
                    break
                }
            }
        }
    }

    find(value) {
        if (this.value === value) {
            return this
        }

        return this.left?.find(value) || this.right?.find(value)
    }

    delete(value) {
        let size, deletedNode
        if (this.left && this.left.value === value) {
            size = this.left.size
            this.left.setSizeUpwards(size*-1)

            deletedNode = this.left
            this.descendants[0] = undefined

            return deletedNode
        }
        if (this.right && this.right.value === value) {
            size = this.right.size
            this.right.setSizeUpwards(size*-1)

            deletedNode = this.right
            this.descendants[1] = undefined

            return deletedNode
        }

        return this.left?.delete(value) || this.right?.delete(value)

    }
}

export function createMinimalTreeRandom(sortedArray) {
    const rootIndex = Math.ceil(sortedArray.length / 2) - 1

    const node = new TreeNodeRandom(sortedArray[rootIndex])

    if (sortedArray.length > 1) {
        node.left = createMinimalTreeRandom(sortedArray.slice(0, rootIndex))
        node.right = createMinimalTreeRandom(sortedArray.slice(rootIndex + 1))
    }

    return node
}

// Test balance of random choices
// let i = 0
// const test = {}
// while (i < 1000) {
//     if (!test[x.randomNode])
//         test[x.randomNode] = 1
//     else
//         test[x.randomNode] += 1
//     i++
// }