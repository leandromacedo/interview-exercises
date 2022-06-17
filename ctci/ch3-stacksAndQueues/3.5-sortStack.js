export function sortStack(stack) {
    const temporaryStack = []

    for (let i = 0; i < stack.length; i++) {

        if (temporaryStack.length === 0) {
            temporaryStack.push(stack[i])
            continue
        }

        let needleSorted = false
        for (let j = 0; j < temporaryStack.length; j++) {
            if (stack[i] > temporaryStack[j]) {
                temporaryStack.splice(j, 0, stack[i])
                needleSorted = true
                break
            }
        }

        if (!needleSorted) {
            temporaryStack.push(stack[i])
        }
    }

    return temporaryStack
}