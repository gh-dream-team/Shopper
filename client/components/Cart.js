import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartItemView from './CartItemView'

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      total: 0
    }
  }
  //need to add a comp-did-mount
  //add a dispatch func to get call from cart

  render() {
    const {cart, total} = this.props
    console.log('CART', cart)
    return (
      <div>
        <h1>WELCOME TO CART</h1>
        {cart.map(item => (
          <div>
            <CartItemView key={item.id} product={item} />
          </div>
        ))}
        <p>Total: ${total}</p>
      </div>
    )
  }
}

const mapState = state => ({
  total: state.cart[0]
    ? state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0,
  cart: state.cart
})

export default connect(mapState)(Cart)
