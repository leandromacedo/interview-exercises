import { expect } from 'chai'
import bstSequences from './4.9-bstSequences.js'
import createMinimalTree from './4.2-minimalTree.js'
import { TreeNode } from './utils.js'

describe('4.9: Sequences possibles from a BST', function () {
    it('Returns correct permutations for single node tree', function () {
        const tree = new TreeNode(1)
        expect(bstSequences(tree)).to.eql([[1]])
    })

    it('Returns 2 results for 3 node tree', () => {
        const tree = createMinimalTree([...Array(3).keys()])

        expect(bstSequences(tree)).to.eql([[1,0,2],[1,2,0]])

        expect(bstSequences(tree)).to.deep.include.members([[1,0,2]])
        expect(bstSequences(tree)).to.deep.include.members([[1,2,0]])
    })
    it('Returns 4 results for 5 node tree', () => {
        const tree = new TreeNode(4, [
            new TreeNode(2, [
                new TreeNode(1, [
                    new TreeNode(0)
                ]),
                new TreeNode(3)
            ]),
            new TreeNode(5)
        ])

        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 1, 0, 3, 5]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 1, 0, 5, 3]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 1, 5, 0, 3]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 5, 1, 0, 3]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 5, 2, 1, 0, 3]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 1, 3, 0, 5]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 1, 3, 5, 0]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 1, 5, 3, 0]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 5, 1, 3, 0]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 5, 2, 1, 3, 0]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 3, 1, 0, 5]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 3, 1, 5, 0]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 3, 5, 1, 0]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 5, 3, 1, 0]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 5, 2, 3, 1, 0]])
    })

    it('Returns 4 results for 5 node tree', () => {
        const tree = new TreeNode(4, [
            new TreeNode(2, [
                new TreeNode(1),
                new TreeNode(3)
            ]),
            new TreeNode(5)
        ])

        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 1, 3, 5]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 1, 5, 3]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 5, 1, 3]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 5, 2, 1, 3]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 3, 1, 5]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 3, 5, 1]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 2, 5, 3, 1]])
        expect(bstSequences(tree)).to.deep.include.members([[4, 5, 2, 3, 1]])
    })
})