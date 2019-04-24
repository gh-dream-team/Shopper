import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Checkout} from './Checkout'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('CheckoutComponent', () => {
  let CheckoutComponent
  let order = {id: 2, address: 'NYC'}
  let total = 9326

  beforeEach(() => {
    CheckoutComponent = shallow(<Checkout order={order} total={total} />)
  })

  it('renders the total in an h3 and converts the total to two decimal places', () => {
    expect(CheckoutComponent.find('h3').text()).to.be.equal('Order total: $93.26')
  })
})