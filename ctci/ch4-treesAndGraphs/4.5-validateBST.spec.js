import { expect } from 'chai'
import { TreeNode } from './utils.js'
import createMinimalTree from './4.2-minimalTree.js'
import validateBST from './4.5-validateBST.js'

describe('4.5: Validate a BST', function () {
    it('Returns true for a single node Tree', () => {
        const balanced = new TreeNode(1)
        const result = validateBST(balanced)

        expect(result).to.be.true
    })

    it('Returns false if not a BST', () => {
        const nonBST = new TreeNode(1, [
            new TreeNode(3),
            new TreeNode(2)
        ])

        const result = validateBST(nonBST)

        expect(result).to.be.false
    })

    it('Returns true for a 3 nodes BST', () => {
        const nonBST = new TreeNode(2, [
            new TreeNode(1),
            new TreeNode(3)
        ])

        const result = validateBST(nonBST)

        expect(result).to.be.true
    })

    it('Returns true for a 2-2-3 nodes BST', () => {
        const nonBST = new TreeNode(2, [
            new TreeNode(2),
            new TreeNode(3)
        ])

        const result = validateBST(nonBST)

        expect(result).to.be.true
    })

    it('Returns true for a 7 nodes BST Tree', () => {
        const balanced = createMinimalTree([...Array(7).keys()])
        const result = validateBST(balanced)

        expect(result).to.be.true
    })
})