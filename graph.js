// DATA
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
]

const adjacencyList = new Map()

const addNode = (airport) => {
    adjacencyList.set(airport, []) // key, value
}

const addEdges = (origin, destination) => {
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}

airports.forEach(addNode)

routes.forEach(route => addEdges(...route))

// First Part
console.log(adjacencyList)

// Prepare an algorithm for Graph Search or Transversal
// Breadth First Search

// bfs goes over
const bfs = (start) => {
    // Create unique list of already visited airports to avoid loops
    const visited = new Set();

    // Creation of a queue to represent the algorithm process
    const queue = [start]

    while (queue.length > 0) {
        // Mutates the queue
        const airport = queue.shift();

        // Grab all the edges for this airport
        const destinations = adjacencyList.get(airport)

        destinations.forEach(destination => {
            console.log(destination)
            // adds new level of tree nodes
            if (destination === 'BKK') {
                console.log('found it!')
            }

            if (!visited.has(destination)) {
                visited.add(destination)
                queue.push(destination)
            }
        })
    }
}

// Depth First Search
const dfs = (start, visited = new Set()) => {
    console.log(start)

    visited.add(start)

    const destinations = adjacencyList.get(start)

    destinations.forEach(destination => {
        if (destination === 'BKK') {
            console.log('found Bangkok')
            return
        }

        if (!visited.has(destination)) {
            dfs(destination, visited)
        }
    })
}

// breadth first search is good to find all available rotes and compare
// Todo: print the path of the trajectories found
bfs('PHX')
dfs('PHX')

/// For both cases complexity is O(v+e) -> vertices(nodes) + edges