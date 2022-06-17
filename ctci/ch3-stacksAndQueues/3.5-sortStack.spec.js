import { expect } from 'chai'
import { sortStack } from './3.5-sortStack.js'

describe('3.5: Sort Stack', function () {
    it('can sort stack', () => {
        const result = sortStack([3,1,2,4])
        expect(result).to.have.ordered.members([4,3,2,1])
    })

    it('can sort stack 2', () => {
        const result = sortStack([3, 1, 12, 2, 4, 0, 3, 5, 19, 2, 2, 7])
        expect(result).to.have.ordered.members([0, 1, 2, 2, 2, 3, 3, 4, 5, 7, 12, 19].reverse())
    })
})