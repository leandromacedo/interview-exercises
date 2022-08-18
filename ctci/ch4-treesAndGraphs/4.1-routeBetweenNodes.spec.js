import { expect } from 'chai'
import { Graph } from './utils.js'
import rootBetweenNodesBFS from './4.1-routeBetweenNodes.js'

describe('4.1: Route Between Nodes using BFS', function () {
    this.beforeEach(() => {
        this.graph = new Graph()

        this.graph.addPaths(1, [2, 3])
        this.graph.addPaths(2, [4, 5])
        this.graph.addPaths(3, [6, 7])
        this.graph.addPaths(4, [])
        this.graph.addPaths(5, [])
        this.graph.addPaths(6, [])
        this.graph.addPaths(7, [])
    })

    it('Can find route', () => {

        const result = rootBetweenNodesBFS(this.graph, 1, 7)

        expect(result).to.be.true
    })

    it('Can\'t find route', () => {

        const result = rootBetweenNodesBFS(this.graph, 1, 8)

        expect(result).to.be.false
    })

    it('Can\'t find in different subtrees', () => {

        const result = rootBetweenNodesBFS(this.graph, 2, 6)

        expect(result).to.be.false
    })

    it('Ignores loops', () => {
        this.graph.addPaths(7, [3])
        const result = rootBetweenNodesBFS(this.graph, 1, 8)

        expect(result).to.be.false
    })
})