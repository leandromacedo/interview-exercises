import { expect } from "chai"
import checkSubtree from "./4.10-checkSubtree.js"
import createMinimalTree from "./4.2-minimalTree.js"
import { TreeNode } from "./utils.js"

describe('4.10: Check if one tree belongs to other', () => {
    it('Returns true for empty tree 2', function() {
        const t1 = new TreeNode(1)
        const t2 = new TreeNode()

        expect(checkSubtree(t1,t2)).to.be.true
    })

    it('Returns true for empty tree 1', function () {
        const t1 = new TreeNode()
        const t2 = new TreeNode(1)

        expect(checkSubtree(t1, t2)).to.be.false
    })

    it('Returns false for different single node', function () {
        const t1 = new TreeNode(1)
        const t2 = new TreeNode(0)

        expect(checkSubtree(t1, t2)).to.be.false
    })

    it('Returns true for same single node', function () {
        const t1 = new TreeNode(1)
        const t2 = new TreeNode(1)

        expect(checkSubtree(t1, t2)).to.be.true
    })

    it('Returns false for child nodes in different branches', function () {
        const t1 = new TreeNode(1, [new TreeNode(2)])
        const t2 = new TreeNode(1, [,new TreeNode(2)])

        expect(checkSubtree(t1, t2)).to.be.false
    })


    it('Returns true for complex tree and subtree', function () {
        const t1 = createMinimalTree([...Array(15).keys()])
        const t2 = new TreeNode(1, [new TreeNode(0), new TreeNode(2)])

        expect(checkSubtree(t1, t2)).to.be.true
    })
})