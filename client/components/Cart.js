import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartItemView from './CartItemView'
import {addCart, clearCart} from '../store/cart.js'
import Checkout from './Checkout'
import SubmitCartButton from './SubmitCartButton'

class Cart extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

handleSubmit (event){
    event.preventDefault()
    this.props.addCart(this.props.cart)
    this.props.clearCart()
}
  render() {
    const {cart, total} = this.props

    return (
      <div>
        <h1>WELCOME TO CART</h1>
        {cart.map(item => <CartItemView key={item.id} product={item} />)}
        <p>Total: ${total}</p>
        <SubmitCartButton addCart={addCart} cart={cart}/> 
        {SubmitCartButton ? <Checkout total={total}/> : <p></p>}
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

const mapDispatch = (dispatch) => ({
  addCart: (cart) => dispatch(addCart(cart))
})

export default connect(mapState, mapDispatch)(Cart)
