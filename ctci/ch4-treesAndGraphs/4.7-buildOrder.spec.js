import { expect } from 'chai'
import createMinimalTree from './4.2-minimalTree.js'
import buildOrder from './4.7-buildOrder.js'

describe('4.7: build Order of dependencies', function () {
    it('Returns empty string for an empty graph', () => {
        const result = buildOrder([],[])

        expect(result).to.be.empty
    })

    it('Returns simple list string for a graph without dependencies', () => {
        const result = buildOrder(['a', 'b', 'c'], [])

        expect(result).to.have.members(['a', 'b', 'c'])
    })

    it('Build order with one dependency', () => {
        const result = buildOrder(['a', 'b', 'c'], [['b', 'a']])

        expect(result).to.eql(['b', 'c', 'a'])
    })

    it('Throw exception if there\'s a loop', () => {
        const resultFn = () => buildOrder(['a', 'b', 'c'], [['b', 'a'], ['a', 'b']])

        expect(resultFn).to.throw()
    })

    it('Build order with ctci example', () => {
        const result = buildOrder(
            ['a', 'b', 'c', 'd', 'e', 'f'],
            [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']]
        )

        expect(result).to.eql(['e', 'f', 'a', 'b', 'd', 'c'])
    })
})