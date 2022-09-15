import { expect } from "chai";
import { TreeNodeRandom, createMinimalTreeRandom} from './4.11-randomNode.js'

describe('4.11: Create tree data structure with get random', () => {
    it('Returns get a random node within range from instance', function () {
        const treeRoot = new TreeNodeRandom(1, [
            new TreeNodeRandom(0),
            new TreeNodeRandom(2,[
                new TreeNodeRandom(3),
                new TreeNodeRandom(4)
            ]),
        ])
        expect(treeRoot.size).to.be.equal(5)
        expect(treeRoot.randomNode).to.be.within(0, 4)
        expect(treeRoot.randomNode).to.not.be.below(0)
        expect(treeRoot.randomNode).to.not.be.above(4)
    })

    it('Returns get a random node within range from method', function () {
        const treeRoot = createMinimalTreeRandom([...Array(7).keys()])

        expect(treeRoot.size).to.be.equal(7)
        expect(treeRoot.randomNode).to.be.within(0, 6)
        expect(treeRoot.randomNode).to.not.be.below(0)
        expect(treeRoot.randomNode).to.not.be.above(6)
    })

    it('Tests auxiliary functions and size recalculation', function () {
        const treeRoot = createMinimalTreeRandom([...Array(7).keys()])

        expect(treeRoot.delete(1)).to.include({value: 1})
        expect(treeRoot.size).to.be.equal(4)
        expect(treeRoot.left).to.be.undefined

        treeRoot.insert(1)
        expect(treeRoot.size).to.be.equal(5)
        expect(treeRoot.left).to.include({ value: 1 })
        expect(treeRoot.find(1)).to.include({ value: 1 })
        treeRoot.insert(0)
        expect(treeRoot.size).to.be.equal(6)
        expect(treeRoot.left.left).to.include({ value: 0 })
        expect(treeRoot.find(0)).to.include({ value: 0 })
        treeRoot.insert(2)
        expect(treeRoot.size).to.be.equal(7)
        expect(treeRoot.left.right).to.include({ value: 2 })
        expect(treeRoot.find(2)).to.include({ value: 2 })

        expect(treeRoot.find(5)).to.include({ value: 5 })
        expect(treeRoot.find(6)).to.include({ value: 6 })
        expect(treeRoot.find(7)).to.be.undefined

    })
})