export class StackMin {
    constructor() {
        this.minValue
        this.minValueStack = []
        this.stack = []
    }

    push(value) {
        if (typeof(value) !== 'number')
            throw Error('Value must a number')

        this.minValueStack.push(this.minValue)

        if (typeof(this.minValue) === 'undefined'
            || value < this.minValue) {
                this.minValue = value
        }

        this.stack.push(value)
    }

    pop() {
        this.minValue = this.minValueStack.pop()

        return this.stack.pop()
    }

    min() {
        return this.minValue
    }
}