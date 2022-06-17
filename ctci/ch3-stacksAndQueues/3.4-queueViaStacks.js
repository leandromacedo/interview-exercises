export class MyQueue {
    constructor() {
        this.stack = [];
        this.reverseStack = [];
    }

    add(value) {
        this.stack.push(value)
    }

    remove() {
        if(this.isEmpty())
            throw new Error ('The queue is empty')

        while (this.stack.length > 0) {
            this.reverseStack.push(this.stack.pop())
        }

        return this.reverseStack.pop()
    }

    peek() {
        return this.stack.slice(-1)[0] || this.reverseStack[0]
    }

    isEmpty() {
        return this.stack.length === 0
            && this.reverseStack.length === 0
    }
}