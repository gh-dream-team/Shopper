import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartItemView from './CartItemView'

class Cart extends Component {
    //need to add a comp-did-mount
    //add a dispatch func to get call from cart 

  render() {
    const {cart} = this.props
    console.log("ITEMS", cart)
    console.log("PROPS",this.props)
    return (
    <div>
    <h1>WELCOME TO CART</h1>
    {cart.map(item => (
      <CartItemView key={item.id} product={item} />
    ))}
    </div>)
  }
}

const mapState = state => ({
  cart: state.cart
})

export default connect(mapState)(Cart)