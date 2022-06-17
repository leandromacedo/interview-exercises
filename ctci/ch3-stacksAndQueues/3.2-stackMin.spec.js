import { expect } from 'chai'
import { StackMin } from './3.2-stackMin.js'

describe('3.2: Stack Min', function () {
    beforeEach(function () {
        this.stack = new StackMin()
    })

    it('can get the min', function () {
        this.stack.push(3)
        expect(this.stack.min()).to.equal(3)

        this.stack.push(2)
        expect(this.stack.min()).to.equal(2)

        this.stack.push(4)
        expect(this.stack.min()).to.equal(2)

        this.stack.push(1)
        expect(this.stack.min()).to.equal(1)

        this.stack.push(5)
        expect(this.stack.min()).to.equal(1)

        this.stack.pop()
        expect(this.stack.min()).to.equal(1)

        this.stack.pop()
        expect(this.stack.min()).to.equal(2)

        this.stack.pop()
        expect(this.stack.min()).to.equal(2)

        this.stack.pop()
        expect(this.stack.min()).to.equal(3)

        this.stack.pop()
        expect(this.stack.min()).to.equal(undefined)

    })

    it('can push values in ascending order and min stays the same', function () {
        let values = [2, 4, 6, 8, 10, 12]

        values.forEach(v => {
            this.stack.push(v)
            expect(this.stack.min()).to.equal(2)
        })

        values.reverse().forEach(v => {
            expect(this.stack.min()).to.equal(2)
            expect(this.stack.pop()).to.equal(v)
        })

        expect(this.stack.min()).to.be.undefined
    })

    it('can push values in descending order and min is updated', function () {
        let values = [12, 10, 8, 6, 4, 2]

        values.forEach(v => {
            this.stack.push(v)
            expect(this.stack.min()).to.equal(v)
        })

        values.reverse().forEach((v) => {
            expect(this.stack.min()).to.equal(v)
            expect(this.stack.pop()).to.equal(v)
        })

        expect(this.stack.min()).to.be.undefined
    })
})