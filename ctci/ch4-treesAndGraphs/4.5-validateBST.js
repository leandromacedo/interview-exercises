export default function validateBST(rootNode) {
    const cache = {
        isValid: true
    }

    validateNode(rootNode, -Infinity, Infinity, cache)

    return cache.isValid
}

function validateNode(node, min, max, cache) {
    if (!node) return

    if (node.value < min || node.value > max) {
        cache.isValid = false
    }
    validateNode(node.left, min, node.value, cache)
    validateNode(node.right, node.value, max, cache)
}
