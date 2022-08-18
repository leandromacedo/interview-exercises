import { expect } from 'chai'
import { TreeNode } from './utils.js'
import createMinimalTree from './4.2-minimalTree.js'
import successor from './4.6-successor.js'

describe('4.6: Find a successor', function () {
    it('Returns null for a single node Tree', () => {
        const balanced = new TreeNode(1)
        const result = successor(balanced)

        expect(result).to.be.null
    })

    it('Returns null for a rightmost node', () => {
        const tree = createMinimalTree([...Array(3).keys()])
        const result = successor(tree.right)

        expect(result).to.be.null
    })

    it('Returns parent for a left node', () => {
        const tree = createMinimalTree([...Array(3).keys()])
        const result = successor(tree.left)

        expect(result).to.include({value: 1})
    })

    it('Returns successor for a 3 level tree', () => {
        const tree = createMinimalTree([...Array(7).keys()])

        expect(successor(tree.left.left)).to.include({ value: 1 })
        expect(successor(tree.left)).to.include({ value: 2 })
        expect(successor(tree.left.right)).to.include({ value: 3 })
        expect(successor(tree)).to.include({ value: 4 })
        expect(successor(tree.right.left)).to.include({ value: 5 })
        expect(successor(tree.right)).to.include({ value: 6 })
        expect(successor(tree.right.right)).to.be.null
    })
})
