import { expect } from 'chai'
import { AnimalShelter } from './3.6-animalShelter.js'

describe('3.6: Animal Shelter', function () {
    this.beforeEach(() => {
        this.queue = new AnimalShelter()
    })

    it('can add and peek', () => {
        this.queue.enqueueCat('Napoleão')
        expect(this.queue.peekCat()).to.equal('Napoleão')

        this.queue.enqueueDog('Marley')
        expect(this.queue.peekDog()).to.equal('Marley')
    })

    it('throw error when removing empty', () => {
        expect(this.queue.dequeueDog).to.throw()
        expect(this.queue.dequeueCat).to.throw()
    })

    it('it can remove a cat', () => {
        this.queue.enqueueCat('Napoleão')
        this.queue.enqueueDog('Marley')
        expect(this.queue.dequeueCat()).to.equal('Napoleão')
    })


    it('it can remove a Dog', () => {
        this.queue.enqueueDog('Marley')
        this.queue.enqueueCat('Napoleão')
        this.queue.enqueueDog('Beethoven')
        expect(this.queue.dequeueDog()).to.equal('Marley')
    })

    it('it can remove Any', () => {
        this.queue.enqueueDog('Lassie')
        this.queue.enqueueCat('Napoleão')
        this.queue.enqueueDog('Beethoven')
        expect(this.queue.dequeueAny()).to.equal('Lassie')

        this.queue.enqueueDog('Oddie')
        this.queue.enqueueCat('Garfield')
        expect(this.queue.dequeueAny()).to.equal('Napoleão')
    })
})
