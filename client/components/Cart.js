import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartItemView from './CartItemView'
import {fetchCart} from '../store/userCart'
import {getGuestCart, deleteGuestCart} from '../store/cart'
import UserCartItemView from './UserCartItemView'

class Cart extends Component {
  componentDidMount() {
    const {user} = this.props
    console.log(user, 'USER')
    if (!user.username) {
      this.props.getGuestCart()
    } else {
      this.props.deleteGuestCart()
      this.props.fetchCart(user.id)
    }
  }

  render() {
    const {items, total, loading, userCart, user} = this.props

    if (loading) {
      return <p>loading</p>
    } else {
      return (
        <div>
          <h1>WELCOME TO CART</h1>
          {user.username
            ? userCart.map(products => (
                <UserCartItemView key={products.id} products={products} />
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
  getGuestCart: () => dispatch(getGuestCart()),
  deleteGuestCart: () => dispatch(deleteGuestCart())
})

export default connect(mapState, mapDispatch)(Cart)
