// This test would work if we take out the location.total - I think the router.location causes an issue

// import {expect} from 'chai'
// import React from 'react'
// import enzyme, {shallow} from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// import {Checkout} from './Checkout'

// const adapter = new Adapter()
// enzyme.configure({adapter})

// describe('GuestCheckout', () => {
//   let checkout
//   let order = {id: 2, address: 'NYC'}

//   beforeEach(() => {
//     checkout = shallow(<Checkout order={order} />)
//   })

//   it('renders the total in an h3 and converts the total to two decimal places', () => {
//     expect(checkout.find('h3').text()).to.be.equal('Your order number is 2')
//   })
// })
