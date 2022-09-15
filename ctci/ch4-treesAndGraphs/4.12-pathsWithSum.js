import { Queue, TreeNode } from "./utils.js"


export function pathsWithSumOptimized(treeRoot, refValue) {
    const runningSumMap = new Map()

    return pathsWithSumRecursivelyOptimized(treeRoot, refValue, 0, runningSumMap)
}

function pathsWithSumRecursivelyOptimized(node, refValue, runningSum, runningSumMap)
{
    if (!node || typeof node.value === 'undefined') return 0

    runningSum += node.value

    const refSum = runningSum - refValue

    let totalPaths = runningSumMap.get(refSum) || 0

    if (refSum === 0) totalPaths++

    const previousValue = runningSumMap.get(runningSum) || 0
    runningSumMap.set(runningSum, previousValue + 1)
    totalPaths += pathsWithSumRecursivelyOptimized(node.left, refValue, runningSum, runningSumMap)
    totalPaths += pathsWithSumRecursivelyOptimized(node.right, refValue, runningSum, runningSumMap)

    // After leaving the branch, return hashmap to previous state
    // to not conflict with other nodes
    runningSumMap.set(runningSum, previousValue)

    return totalPaths
}

export function pathsWithSumBrute(treeRoot, refValue) {
    const payload = {
        refValue,
        pathCounter: 0,
    }

    // bfs
    const queue = new Queue()
    queue.enqueue(treeRoot)

    while(!queue.isEmpty()) {
        const node = queue.dequeue()

        pathsWithSumRecursivelyBrute(node, payload, 0, '')

        if (node.left) queue.enqueue(node.left)
        if (node.right) queue.enqueue(node.right)
    }

    return payload.pathCounter
}

function pathsWithSumRecursivelyBrute(node, payload, pathSum, path) {
    if(!node) return

    const currentPathSum =  pathSum + node.value
    const currentPath = `${path}->${node.value}`
    if (currentPathSum === payload.refValue) {
        payload.pathCounter += 1
        // console.log(currentPath)
    }
    pathsWithSumRecursivelyBrute(node.right, payload, currentPathSum, currentPath)
    pathsWithSumRecursivelyBrute(node.left, payload, currentPathSum, currentPath)

    return payload.pathCounter
}