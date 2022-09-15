// O(m*n)
export default function checkSubtree(t1, t2) {
    const t1Seq = preOrderTraversal(t1)
    const t2Seq = preOrderTraversal(t2)

    if (!t2Seq) return true
    if (!t1Seq) return false

    // console.log(`s1: ${t1Seq} | s2: ${t2Seq}`)
    for (let i = 0; i < t1Seq.length; i++) {
        if (t1Seq[i] === t2Seq[0]) {
            for (let j = 1; j < t2Seq.length; j++) {
                if (t1Seq[i + j] !== t2Seq[j]) {
                    break
                }
                if (j === t2Seq.length - 1 && (t1Seq[i + j] === t2Seq[j])) {
                    return true
                }
            }
        }
    }

    return false
}

function preOrderTraversal(node, cache = { seq: ''}) {
    if (!node || typeof node.value === 'undefined') {
        cache.seq += 'X'
        return
    }

    cache.seq += node.value.toString()
    preOrderTraversal(node.left, cache)
    preOrderTraversal(node.right, cache)

    return cache.seq
}

// Another good solution:
//
// export function checkSubtree(tree1, tree2) {
//     if (!tree1 || !tree1.root) {
//         throw new Error('trees1 must be valid non-empty trees');
//     }
//     if (!tree2 || !tree2.root) {
//         return true;
//     }
//     return findRoot(tree1.root, tree2.root);
// }

// function findRoot(node1, node2) {
//     if (!node1 || !node2) {
//         return false;
//     }
//     else if (node1.val === node2.val && sameTree(node1, node2)) {
//         return true;
//     }
//     else {
//         return findRoot(node1.left, node2) || findRoot(node1.right, node2);
//     }
// }

// function sameTree(node1, node2) {
//     if (!node1 && !node2) {
//         return true;
//     }
//     else if (!node1 && node2 || node1 && !node2) {
//         return false;
//     }
//     else if (node1.val === node2.val) {
//         return sameTree(node1.left, node2.left) && sameTree(node1.right, node2.right);
//     }
//     else {
//         return false;
//     }
// }