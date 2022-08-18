import { createLinkedListNode } from './utils.js'

const linkedListMap = new Map()

export default function listOfDepths(treeNode, depth = 0) {
    if(!treeNode) return

    depth++
    let newNode = createLinkedListNode(treeNode.value, linkedListMap.get(depth))
    linkedListMap.set(depth, newNode)

    listOfDepths(treeNode.left, depth)
    listOfDepths(treeNode.right, depth)

    return linkedListMap
}
