const {expect} = require('chai')
const db = require('../index')
const Item = db.model('item')

describe('Item model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctQuantity', () => {
      let product

      beforeEach(async () => {
        product = await Item.create({
          quantity: 5
        })
      })

      it('should return true for a quantity of 5', () => {
        expect(product.correctQuantity('5')).to.be.equal(true)
      })
    })
  })
})
