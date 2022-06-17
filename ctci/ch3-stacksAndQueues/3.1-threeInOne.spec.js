import { expect } from 'chai';
import { ThreeInOne } from './3.1-threeInOne.js'

describe('3.1: Three In One', function() {
    beforeEach(function() {
        this.stack = new ThreeInOne()
    })

    it('can push values and pop', function() {
        this.stack.push(2, 3)
        const result = this.stack.pop(2)

        expect(result).to.equal(3)
    })

    it('can peek', function () {
        this.stack.push(2, 3)
        this.stack.push(2, 1)
        this.stack.push(2, 2)
        const result = this.stack.peek(2)

        expect(result).to.equal(2)
    })

    it('can peek from multiple stacks', function () {
        this.stack.push(1, 3)
        this.stack.push(2, 1)
        this.stack.push(3, 5)
        this.stack.push(1, 12)
        expect(this.stack.peek(3)).to.equal(5)
        expect(this.stack.peek(1)).to.equal(12)
        expect(this.stack.peek(2)).to.equal(1)
    })

})