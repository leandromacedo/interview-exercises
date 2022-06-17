import { expect } from 'chai'
import { MyQueue } from './3.4-queueViaStacks.js'

describe('3.4: Queue via Stacks', function() {
    this.beforeEach(() => {
        this.queue = new MyQueue()
    })

    it('can add and peek', () => {
        this.queue.add(3)
        expect(this.queue.peek()).to.equal(3)
    })

    it('throw error when removing empty', () => {
        expect(this.queue.remove).to.throw()
    })

    it('it can remove multiple elements', () => {
        this.queue.add(3)
        expect(this.queue.peek()).to.equal(3)

        this.queue.add(2)
        expect(this.queue.peek()).to.equal(2)

        this.queue.add(1)
        expect(this.queue.peek()).to.equal(1)

        expect(this.queue.remove()).to.equal(3)
        expect(this.queue.peek()).to.equal(1)

        expect(this.queue.remove()).to.equal(2)
        expect(this.queue.peek()).to.equal(1)

        expect(this.queue.remove()).to.equal(1)
        expect(this.queue.isEmpty()).to.be.true

        this.queue.add(4)
        this.queue.add(5)

        expect(this.queue.remove()).to.equal(4)
        expect(this.queue.peek()).to.equal(5)
    })
})
