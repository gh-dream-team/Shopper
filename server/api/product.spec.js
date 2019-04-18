const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('products')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {
    beforeEach(() => {
      return Product.create({
        name: '90s Hits',
        description: 'Album of 90s Songs',
        imageURL:
          'https://i.scdn.co/image/f3a712900e850ccf1775a6b0ba15495d796ac95f',
        price: '10'
      })
    })

    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal('90s Hits')
    })
  })

  //   For put request when we want to update quantities
  //   describe('no inventory', () => {
  //     beforeEach(() => {
  //       return Product.create({
  //         name: '90s Hits',
  //         description: 'Album of 90s Songs',
  //         imageURL:'https://i.scdn.co/image/f3a712900e850ccf1775a6b0ba15495d796ac95f',
  //         price: '10',
  //         inventory: 0
  //       })
  //     })

  //     it(' PUT /api/products', async () => {
  //       const res = await request(app)
  //         .get('/api/products')
  //         .expect(200)

  //       expect(res.body).to.be.an('array')
  //       expect(res.body[0].name).to.be.equal('90s Hits')
  //     })
  //   })
})
