const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Cart = db.model('carts')
// const Item = db.model('item')
// const Product = db.model('products')
const User = db.model('user')

describe('Cart routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/carts', () => {
    const codysEmail = 'cody@puppybook.com'
    beforeEach(async () => {
      const user = await User.create({
        email: codysEmail,
        username: 'Cody',
        address: 'NYC'
      })
      const userCart = await Cart.create({
        isPurchased: false,
        userId: user.id
      })
    })

    describe('GET /api/carts/1', async () => {
      const res = await request(app)
        .get('/api/cart/1')
        .expect(200)

      console.log(res.body, '*****')

      expect(res.body).to.be.an('array')
      // expect(res.body[0].userId).to.be.equal(1)
      expect(res.body[0].isPurchased).to.be.equal(false)
    })
  })
})
