const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const GP = db.model('guestpurchases')

describe('Guest Purchases route', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/guestpurchases/', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return GP.create({
        email: codysEmail,
        guestName: 'Cody',
        address: 'NYC',
        cart: {3: 2}
      })
    })

    it('GET /api/guestpurchases', async () => {
      const res = await request(app)
        .get('/api/guestpurchases')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(codysEmail)
      expect(res.body[0].cart).to.be.an('object')
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
