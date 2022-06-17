export class AnimalShelter {
    constructor() {
        this.dogs = []
        this.cats = []
        this.order = []
    }

    enqueueCat(value) {
        this.cats.push(value)
        this.order.push('cat')
    }

    enqueueDog(value) {
        this.dogs.push(value)
        this.order.push('dog')
    }

    peekCat() {
        return this.cats.slice(-1)[0]
    }

    peekDog() {
        return this.dogs.slice(-1)[0]
    }

    dequeueAny() {
        let oldest = this.order[0]
        this.order.splice(0, 1)

        if (oldest === 'dog') {
            return this.dogs.splice(0, 1)[0]
        }


        return this.cats.splice(0, 1)[0]
    }

    dequeue(type, queue) {
        let animalMatch = false
        for (let i = 0; i < this.order.length; i++) {
            if (this.order[i] === type) {
                this.order.splice(i, 1)
                animalMatch = true
            }
        }

        if (!animalMatch) {
            throw new Error('Animal not found')
        }

        return queue.splice(0, 1)[0]

    }

    dequeueDog() {
        if (this.dogs.length === 0) {
            throw new Error('Dogs not found')
        }
        return this.dequeue('dog', this.dogs)
    }

    dequeueCat() {
        if (this.cats.length === 0) {
            throw new Error('Cats not found')
        }

        return this.dequeue('cat', this.cats)
    }
}