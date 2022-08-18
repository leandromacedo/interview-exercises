// O(n) complexity
let maxDepth, minDepth

export default function checkBalanced(treeNode, depth = 0) {
    if (!treeNode) return

    if (depth === 0) {
        maxDepth = 0
        minDepth = Infinity
    }

    if (!treeNode.left && !treeNode.right) {
        // Single node tree case
        if (depth === 0) return true

        if (depth > maxDepth) maxDepth = depth
        else if (depth < minDepth) minDepth = depth

        return
    }

    checkBalanced(treeNode.left, depth + 1)
    checkBalanced(treeNode.right, depth + 1)

    if (maxDepth - minDepth <= 1) {
        return true
    }

    return false
}
