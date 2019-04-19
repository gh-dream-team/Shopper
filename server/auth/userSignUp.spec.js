const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Cart = db.model('carts')

describe('Sign-Up routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/auth/signup/', () => {
    const user = {
      email: 'cody@email.com',
      username: 'Cody',
      address: 'NYC'
    }

    it('POST /auth/signup - signs up and creates cart', async () => {
      const res = await request(app)
        .post('/auth/signup')
        .send(user)
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.email).to.be.equal('cody@email.com')
      const carts = await Cart.findOne({where: {userId: res.body.id}})

      expect(carts.userId).to.be.equal(1)
      expect(carts.isPurchased).to.be.equal(false)
    })
  })
})
