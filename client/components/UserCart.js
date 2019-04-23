import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/userCart'
import UserCartItemView from './UserCartItemView'

class UserCart extends Component {
  componentDidMount() {
    const {user} = this.props
    this.props.fetchCart(user.id)
  }

  render() {
    const {total, userCart} = this.props
    return (
      <div>
        <h1>WELCOME TO CART</h1>
        {userCart.map(products => <UserCartItemView key={products.id} />)}

        <p>Total: ${total / 100}</p>
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
  fetchCart: id => dispatch(fetchCart(id))
})

export default connect(mapState, mapDispatch)(UserCart)
