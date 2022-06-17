export class ThreeInOne {
    constructor(numberOfStacks = 3) {
        this.numberOfStacks = numberOfStacks
        this.stackCapacity = 0
        this.values = []
        this.sizes = [0, 0, 0]
    }

    getSize(stack) {
        return this.sizes[stack -1]
    }

    getLastStackIndex(stack, value) {
        let multiplier = this.getSize(stack)
        if (typeof value === 'undefined') multiplier = this.getSize(stack) - 1

        const valuesByRow = multiplier * this.numberOfStacks
        const valueByStack = valuesByRow + stack

        return valueByStack - 1
    }

    action(stack, value = undefined) {
        const valueId = this.getLastStackIndex(stack, value)

        this.values[valueId] = value

        if (typeof value !== 'undefined') this.sizes[stack - 1]++
        else this.sizes[stack - 1]--
    }

    // empty gaps are created for other stacks
    push(stack, value = 0) {
        if (!stack) throw new Error('Stack declaration missing')
        this.action(stack, value)
    }

    // the element cannot be removed because of the fixed index per stack.
    // instead it should be set as undefined
    pop(stack) {
        if (!stack) throw new Error('Stack declaration missing')

        const value = this.peek(stack)
        this.action(stack)

        return value
    }

    peek(stack) {
        if (!stack) throw new Error('Stack declaration missing')

        let valueId = this.getLastStackIndex(stack)

        return this.values[valueId]
    }

    isEmpty(stack) {
        if (!stack) throw new Error('Stack declaration missing')

        return this.sizes[stack - 1] === 0
    }
}