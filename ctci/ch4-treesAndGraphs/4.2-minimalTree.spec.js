import { expect } from 'chai'
import createMinimalTree from './4.2-minimalTree.js'

describe('4.2: Create minimal tree', function () {
    it('Can create odd level 2 tree', () => {

        const result = createMinimalTree([1,2,3])

        expect(result).to.be.an('object')
        expect(result).to.include({ value: 2})
        expect(result).to.have.nested.property('descendants[0].value')
            .that.equals(1)
        expect(result).to.have.nested.property('descendants[1].value')
            .that.equals(3)
    })

    it('Can create even level 3 tree', () => {

        const result = createMinimalTree([1,4,7,12,19,20,1000])

        expect(result).to.be.an('object')

        expect(result).to.include({ value:  12})

        expect(result).to.have.nested.property('descendants[0].value')
            .that.equals(4)
        expect(result).to.have.nested.property('descendants[1].value')
            .that.equals(20)

        expect(result).to.have.nested
            .property('descendants[0].descendants[0].value').that.equals(1)
        expect(result).to.have.nested
            .property('descendants[0].descendants[1].value').that.equals(7)
        expect(result).to.have.nested
            .property('descendants[1].descendants[0].value').that.equals(19)
        expect(result).to.have.nested
            .property('descendants[1].descendants[1].value').that.equals(1000)
    })

    it('Can create even level 4 tree', () => {

        const result = createMinimalTree([...Array(8).keys()])

        expect(result).to.be.an('object')

        expect(result).to.include({ value: 3 })

        expect(result).to.have.nested.property('descendants[0].value')
            .that.equals(1)
        expect(result).to.have.nested.property('descendants[1].value')
            .that.equals(5)

        expect(result).to.have.nested
            .property('descendants[0].descendants[0].value').that.equals(0)
        expect(result).to.have.nested
            .property('descendants[0].descendants[1].value').that.equals(2)
        expect(result).to.have.nested
            .property('descendants[1].descendants[0].value').that.equals(4)
        expect(result).to.have.nested
            .property('descendants[1].descendants[1].value').that.equals(6)

        expect(result).to.have.nested
            .property('descendants[1].descendants[1].descendants[1].value')
            .that.equals(7)
    })

})