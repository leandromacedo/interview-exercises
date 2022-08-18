export default function successor(node) {
    // if has right child
    if (node.right) {
        let cursorNode = node.right

        while (cursorNode.left) {
            cursorNode = cursorNode.left
        }

        return cursorNode
    }

    // if childless
    let parentCursor = node.parent
    while (parentCursor && parentCursor.value < node.value) {
        parentCursor = parentCursor.parent
    }

    return parentCursor
}