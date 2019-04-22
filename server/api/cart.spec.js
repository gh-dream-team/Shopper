const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Cart = db.model('carts')
const Item = db.model('item')
const Product = db.model('products')
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
        itemIds: [item.id],
        isPurchased: false,
        userId: user.id
      })

      // const product = await Product.create({
      //   name: '90s Hits',
      //   description: 'Album of 90s Songs',
      //   imageURL:
      //     'https://i.scdn.co/image/f3a712900e850ccf1775a6b0ba15495d796ac95f',
      //   price: '10'
      // })
      // const item = await Item.create({
      //   quantity: 1,
      //   cartId: userCart.id,
      //   productId: product.id
      // })
    })

    describe('GET /api/carts', async () => {
      const res = await request(app)
        .get('/api/carts')
        .expect(200)

      console.log(res.body, '*****')

      expect(res.body).to.be.an('array')
      // expect(res.body[0].userId).to.be.equal(1)
      expect(res.body[0].isPurchased).to.be.equal(false)
      expect(res.body[0].itemIds).to.be.an('array')
    })
  })
})
