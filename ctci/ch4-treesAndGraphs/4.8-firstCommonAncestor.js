import createMinimalTree from "./4.2-minimalTree.js"

// O(pq)
export default function firstCommonAncestor(p, q) {
    let pCursor = p
    while (pCursor) {
        let qCursor = q
        while (qCursor) {
            if (pCursor === qCursor) return pCursor
            qCursor = qCursor.parent
        }
        pCursor = pCursor.parent
    }

    return false
}