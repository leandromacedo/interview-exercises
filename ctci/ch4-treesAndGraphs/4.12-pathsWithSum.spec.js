import { expect } from "chai"
import { pathsWithSumOptimized, pathsWithSumBrute } from "./4.12-pathsWithSum.js"
import { TreeNode } from "./utils.js"

describe('4.12: Count number of paths to a particular sum', () => {
    it('Returns 0 for empty tree', function () {
        const tree = new TreeNode()

        expect(pathsWithSumBrute(tree, 0)).to.be.equal(0)
        expect(pathsWithSumOptimized(tree, 0)).to.be.equal(0)
    })

    it('Returns 1 for 0 root-only tree with sum 0', function () {
        const tree = new TreeNode(0)

        expect(pathsWithSumBrute(tree, 0)).to.be.equal(1)
        expect(pathsWithSumOptimized(tree, 0)).to.be.equal(1)
    })

    it('Returns 2 paths for level 2 tree with sum 3', function () {
        let tree = new TreeNode(1, [
            new TreeNode(2),
            new TreeNode(2)
        ])

        expect(pathsWithSumBrute(tree, 3)).to.be.equal(2)
        expect(pathsWithSumOptimized(tree, 3)).to.be.equal(2)
    })

    it('Returns 1 path for level 2 tree with sum 1', function () {
        let tree = new TreeNode(1, [
            new TreeNode(2),
            new TreeNode(2)
        ])

        expect(pathsWithSumBrute(tree, 1)).to.be.equal(1)
        expect(pathsWithSumOptimized(tree, 1)).to.be.equal(1)
    })

    it('Returns 4 paths for level 3 tree with sum 2', function () {
        let tree = new TreeNode(1, [
            new TreeNode(2, [
                new TreeNode(-1, [
                    new TreeNode(1)
                ])
            ]),
            new TreeNode(2)
        ])

        expect(pathsWithSumBrute(tree, 2)).to.be.equal(4)
        expect(pathsWithSumOptimized(tree, 2)).to.be.equal(4)
    })

    it('Returns 0 paths for level 3 tree with sum 10', function () {
        let tree = new TreeNode(1, [
            new TreeNode(2, [
                new TreeNode(-1, [
                    new TreeNode(1)
                ])
            ]),
            new TreeNode(2)
        ])

        expect(pathsWithSumBrute(tree, 10)).to.be.equal(0)
        expect(pathsWithSumOptimized(tree, 10)).to.be.equal(0)
    })

})