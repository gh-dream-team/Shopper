import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartItemView from './CartItemView'
import {fetchCart} from '../store/userCart'
import {getGuestCart} from '../store/cart'

class Cart extends Component {
  //need to add a comp-did-mount
  //add a dispatch func to get call from cart
  componentDidMount() {
    const {user} = this.props
    if (!this.props.user.username) {
      this.props.getGuestCart()
    } else {
      this.props.fetchCart(user.id)
    }
  }

  render() {
    const {items, total, loading, user, userCart} = this.props

    if (loading) {
      return <p>loading</p>
    } else {
      return (
        <div>
          <h1>WELCOME TO CART</h1>
          {user.username ? userCart.map(product => (
            <CartItemView key={product.id} product={product} />
          )) 
          : items.map(product => (
            <CartItemView key={product.id} product={product} />
          ))}

          <p>Total: ${total}</p>
        </div>
      )
    }
  }
}

const mapState = state => ({
  total: state.cart.items[0]
    ? state.cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
    : 0,
  cart: state.cart,
  user: state.user,
  items: state.cart.items,
  loading: state.cart.loading,
  userCart: state.userCart
})

const mapDispatch = dispatch => ({
  fetchCart: id => dispatch(fetchCart(id)),
  getGuestCart
})

export default connect(mapState, mapDispatch)(Cart)