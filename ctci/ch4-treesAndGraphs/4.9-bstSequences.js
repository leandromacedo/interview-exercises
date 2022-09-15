import weave from "./4.9-helperWeave.js"

export default function allSequences(node) {
    let result = []

    if (!node || typeof node.value === 'undefined') {
        return result
    }
    if (!node.right && !node.left) {
        result.push([node.value])
        return result
    }

    const prefix = []
    prefix.push(node.value)

    const lSeq = allSequences(node.left)
    const rSeq = allSequences(node.right)
    // console.log(`${prefix}: ${lSeq} | ${rSeq}`)
    if (!lSeq.length) {
        for (let j = 0; j < rSeq.length; j++) {
            weave(prefix, lSeq, rSeq[j], result)
        }
    }

    if (!rSeq.length) {
        for (let i = 0; i < lSeq.length; i++) {
            weave(prefix, lSeq[i], rSeq, result)
        }
    }

    for (let i = 0; i < lSeq.length; i++) {
        for (let j = 0; j < rSeq.length; j++) {
            weave(prefix, lSeq[i], rSeq[j], result)
        }
    }
    return result
}