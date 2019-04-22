import React, {Component} from 'react'
import {connect} from 'react-redux'
import CartItemView from './CartItemView'
import {getGuestCart, deleteGuestCart} from '../store/cart'
import {Link} from 'react-router-dom'

class Cart extends Component {
  componentDidMount() {
    this.props.getGuestCart()
  }

  render() {
    const {items, total, loading, deleteGuestCart} = this.props

    if (loading) {
      return <p>loading</p>
    } else {
      return (
        <div>
          <h1>WELCOME TO CART</h1>
          {items.map(product => (
            <CartItemView key={product.id} product={product} />
          ))}
          <p>Total: ${total / 100}</p>

          <button type="button">
            <Link to="/guest-checkout">Checkout Form</Link>{' '}
          </button>

          <button onClick={() => deleteGuestCart()}>Clear Cart</button>

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
  loading: state.cart.loading
})

const mapDispatch = dispatch => ({
  getGuestCart: () => dispatch(getGuestCart()),
  deleteGuestCart: () => dispatch(deleteGuestCart())
})

export default connect(mapState, mapDispatch)(Cart)
