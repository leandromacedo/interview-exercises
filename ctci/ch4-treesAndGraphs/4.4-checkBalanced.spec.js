import { expect } from 'chai'
import { TreeNode } from './utils.js'
import createMinimalTree from './4.2-minimalTree.js'
import checkBalanced from './4.4-checkBalanced.js'

describe('4.4: Check a tree if its balenced', function () {
    it('Returns true for a single node Tree', () => {
        const balanced = new TreeNode(1)
        const result = checkBalanced(balanced)

        expect(result).to.be.true
    })

    it('Returns true for a balanced Tree', () => {
        const balanced = createMinimalTree([...Array(8).keys()])
        const result = checkBalanced(balanced)

        expect(result).to.be.true
    })

    it('Returns false for a unbalanced Tree', () => {
        const unbalanced = new TreeNode(1, [
            new TreeNode(2, [
                new TreeNode(3, [
                    new TreeNode(4)
                ])
            ]),
            new TreeNode(5)
        ])

        const result = checkBalanced(unbalanced)

        expect(result).to.be.false
    })

    it('Returns false for another unbalanced Tree', () => {
        const unbalanced = new TreeNode(1, [
            new TreeNode(2, [
                new TreeNode(3, [
                    new TreeNode(4)
                ])
            ]),
            new TreeNode(5, [
                new TreeNode(6)
            ])
        ])

        const result = checkBalanced(unbalanced)

        expect(result).to.be.true
    })
})