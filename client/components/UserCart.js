import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/userCart'
import UserCartItemView from './UserCartItemView'
import {checkout} from '../store/userOrder'
import {priceConverter} from '../utils'

class UserCart extends Component {
  componentDidMount() {
    const {user} = this.props
    this.props.fetchCart(user.id)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(id, total) {
    this.props.checkout(id, total)
    return this.props.history.push('/user-order')
  }

  render() {
    const {total, userCart, checkout, user} = this.props

    return (
      <div>
        <h1>WELCOME TO CART</h1>
        <div className="userCartContainer">
          <div className="leftUserContainer">
            {userCart.map(products => <UserCartItemView key={products.id} />)}
          </div>
          <div className="rightUserContainer">
            <div className="userTotal">Total: ${priceConverter(total)}</div>

            <div className="submitOrder">
              <button
                type="button"
                onClick={() => this.handleClick(user.id, total)}
              >
                Submit Order{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  total: state.userCart[0]
    ? state.userCart[0].reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      )
    : 0,
  user: state.user,
  userCart: state.userCart
})

const mapDispatch = dispatch => ({
  fetchCart: id => dispatch(fetchCart(id)),
  checkout: (id, total) => dispatch(checkout(id, total))
})

export default connect(mapState, mapDispatch)(UserCart)
