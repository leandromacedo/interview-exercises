import { expect } from 'chai'
import firstCommonAncestor from './4.8-firstCommonAncestor.js'
import createMinimalTree from "./4.2-minimalTree.js"
import { TreeNode } from './utils.js'

describe('4.8: First Common Ancestor', function () {
    beforeEach(() => {
        this.tree = createMinimalTree([...Array(7).keys()])
    })

    it('Returns same node if equal', () => {
        const result = firstCommonAncestor(this.tree.left, this.tree.left)

        expect(result).to.have.include({value: 1})
    })

    it('Returns first common parent', () => {
        let result = firstCommonAncestor(this.tree.left.left, this.tree.left.right)
        expect(result).to.have.include({ value: 1 })

        result = firstCommonAncestor(this.tree.left.left, this.tree.right.right)
        expect(result).to.have.include({ value: 3 })

        result = firstCommonAncestor(this.tree.right.left, this.tree.right.right)
        expect(result).to.have.include({ value: 5 })
    })

    it('Returns false if not common trees', () => {
        const result = firstCommonAncestor(this.tree.left.left, new TreeNode(2))

        expect(result).to.be.false
    })
})