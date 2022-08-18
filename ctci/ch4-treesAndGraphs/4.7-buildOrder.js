import { Graph } from "./utils.js"

export default function buildOrder(projects, dependencies) {
    if (projects.length === 0) {
        return []
    }

    const graph = new Graph()
    projects.forEach(project => {
        graph.addPaths(project)
    })
    dependencies.forEach(dependency => {
        graph.addPath(dependency[1], dependency[0])
    })

    const queue = []
    findNext(graph, queue)

    return queue

}

function findNext(graph, queue) {
    let noIndependentProjects = true
    for (const [mProject, mDependencies] of graph.adjacencyList) {
    // graph.forEach((mDependencies, mProject, graph) => {
        if (mDependencies.length === 0 && !queue.includes(mProject)) {
            queue.push(mProject)
            noIndependentProjects = false

            graph.adjacencyList.forEach(mDependencies => {
                if (mDependencies.includes(mProject)) {
                    mDependencies.splice(mDependencies.indexOf(mProject), 1)
                }
            })
        }


    }

    if(noIndependentProjects) {
        throw new Error('cyclic graph')
    }

    if(graph.size !==  queue.length) {
        findNext(graph, queue)
    }
}