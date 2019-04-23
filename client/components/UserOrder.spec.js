import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {UserCheckout} from './UserOrder'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('User Order', () => {
  let userCheckout
  let order = {id: 2, address: 'NYC'}
  let total = 9326

  beforeEach(() => {
    userCheckout = shallow(<UserCheckout order={order} total={total} />)
  })

  it('renders the total in an h3 and converts the total to two decimal places', () => {
    expect(userCheckout.find('h3').text()).to.be.equal('Order total: $93.26')
  })
})
