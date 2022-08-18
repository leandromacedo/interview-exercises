import { expect } from 'chai'
import createMinimalTree from './4.2-minimalTree.js'
import listOfDepths from './4.3-listOfDepths.js'

describe('4.3: Create Linked List by Depth', function () {
    it('Can create linked list', () => {

        const input = createMinimalTree([...Array(8).keys()])
        const result = listOfDepths(input)


        expect(result).to.be.an('Map')
        expect(result).to.contain.key(1)
        expect(result).to.contain.all.key([1, 2, 3, 4])

        expect(result.get(1)).to.include({value: 3})
        expect(result.get(2)).to.include({ value: 5 })
        expect(result.get(2)).to.have.nested.property('next.value')
            .that.equals(1)
    })
})