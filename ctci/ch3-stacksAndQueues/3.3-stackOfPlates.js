class Stack {
    constructor(threshold, previousStack) {
        this.stack = []
        this.threshold = threshold
        this.previousStack = previousStack
    }

    push(value) {
        if (this.stack.length > this.threshold) {
            throw new Error('Can\'t push into a full stack')
        }
        this.stack.push(value)
    }

    pop() {
        return this.stack.pop()
    }

    isFull() {
        if (this.stack.length > this.threshold)
            throw new Error('Stack is bigger than it should!')
        else if (this.stack.length === this.threshold)
            return true
        return false
    }

    isEmpty() {
        return this.stack.length === 0
    }

    peek() {
        return this.stack.slice(-1)[0]
    }

}

export class SetOfStacks {
    constructor(threshold = 10) {
        this.stacks = []
        this.threshold = threshold
        this.currentStack
        this.previousCurrentStack
    }

    push(value) {
        if (!this.currentStack || this.currentStack.isFull()) {
            if (this.currentStack?.isFull()) {
                this.previousCurrentStack = this.currentStack
            }

            this.currentStack = new Stack(this.threshold, this.previousCurrentStack)
            this.stacks.push(this.currentStack)
        }
        this.currentStack.push(value)
    }

    pop() {
        const poppedValue = this.currentStack.pop()

        if (this.currentStack.isEmpty()) {
            this.currentStack = this.currentStack.previousStack
        }

        return poppedValue
    }

    peek() {
        return this.currentStack?.peek()
    }

    popAt(index) {
        const selectedStack = this.stacks[index]

        if(!selectedStack) {
            throw Error('This stack does not exist')
        }
        if (selectedStack.isEmpty()) {
            throw Error('Selected stack is empty')
        }

        return selectedStack.pop()
    }
}