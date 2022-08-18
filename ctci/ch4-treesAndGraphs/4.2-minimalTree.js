import { TreeNode } from './utils.js'

// O(N log N) because of N from slice for each ramification in log N levels
export default function createMinimalTree(sortedArray) {
    const rootIndex = Math.ceil(sortedArray.length/2) - 1

    const node = new TreeNode(sortedArray[rootIndex])

    if (sortedArray.length > 1) {
        node.left = createMinimalTree(sortedArray.slice(0, rootIndex))
        node.right = createMinimalTree(sortedArray.slice(rootIndex + 1))
    }

    return node
}