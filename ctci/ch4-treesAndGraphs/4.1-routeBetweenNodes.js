import { Queue } from './utils.js'
// BFS
// Complexity is O(n) where n is the number of edges plus leaves
export default function rootBetweenNodesBFS(graph, source, target) {
    const queue = new Queue()
    const marked = new Set()
    queue.enqueue(source)
    marked.add(source)

    while(queue.length) {
        let next = queue.dequeue()

        let adjacents = graph.adjacencyList.get(next)
        for (let nAdj of adjacents) {
            if (nAdj === target) {
                return true
            }
            if (!marked.has(nAdj)) {
                marked.add(nAdj)
                queue.enqueue(nAdj)
            }
        }
    }

    return false
}