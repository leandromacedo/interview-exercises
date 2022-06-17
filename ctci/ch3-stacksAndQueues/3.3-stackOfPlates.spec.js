import { expect } from 'chai'
import { SetOfStacks } from './3.3-stackOfPlates.js'

describe('3.3: Set of Stacks', function() {
    this.beforeEach(function() {
        this.stack = new SetOfStacks(2)
    })

    it('can push', function() {
        this.stack.push(3)
        expect(this.stack.peek()).to.equal(3)
    })

    it('can pop', function () {
        this.stack.push(1)
        expect(this.stack.pop()).to.equal(1)
    })

    it('can make multiple operations', function () {
        this.stack.push(3)
        expect(this.stack.peek()).to.equal(3)

        this.stack.push(2)
        expect(this.stack.peek()).to.equal(2)

        this.stack.push(1)
        expect(this.stack.peek()).to.equal(1)

        expect(this.stack.pop()).to.equal(1)
        expect(this.stack.peek()).to.equal(2)

        expect(this.stack.pop()).to.equal(2)
        expect(this.stack.peek()).to.equal(3)

        expect(this.stack.pop()).to.equal(3)
        expect(this.stack.peek()).to.be.undefined
    })

    it('throw error when index does not exist', function() {
        this.stack.push(3)
        let popAtFn = () => { this.stack.popAt(2) }
        expect(popAtFn).to.throw()
    })

    it('can pop at specific stack', function() {
        this.stack.push(3)
        let popAtFn = () => { this.stack.popAt(0) }
        expect(this.stack.pop()).to.equal(3)
    })

    it('can pop at specific stack', function() {
        this.stack.push(3)
        expect(this.stack.peek()).to.equal(3)

        this.stack.push(2)
        expect(this.stack.peek()).to.equal(2)

        this.stack.push(1)
        expect(this.stack.peek()).to.equal(1)

        expect(this.stack.popAt(0)).to.equal(2)

        expect(this.stack.peek()).to.equal(1)

        expect(this.stack.popAt(0)).to.equal(3)

        expect(this.stack.popAt(1)).to.equal(1)

    })
})
