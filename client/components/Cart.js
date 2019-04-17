import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartItemView from './CartItemView'

class Cart extends Component {
  //need to add a comp-did-mount
  //add a dispatch func to get call from cart

  render() {
    const {cart, total} = this.props

    return (
      <div>
        <h1>WELCOME TO CART</h1>
        {cart.map(item => <CartItemView key={item.id} product={item} />)}
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
