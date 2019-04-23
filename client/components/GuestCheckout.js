import React from 'react'
import {connect} from 'react-redux'
import {addGuestInfo, getGuestCart, deleteGuestCart} from '../store/cart'
import './GuestCheckout.css'
import {priceConverter} from '../utils'

class GuestCheckout extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.getGuestCart()
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const guestName = evt.target.guestName.value
    const email = evt.target.email.value
    const address = evt.target.address.value
    this.props.addGuestInfo(
      guestName,
      email,
      address,
      this.props.items,
      this.props.total
    )
    this.props.deleteGuestCart()
    return this.props.history.push('/order-info')
  }

  render() {
    return (
      <div className="guestCheckoutForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="guestName" required={true} />
          </label>
          <label>
            Email:
            <input type="email" name="email" required={true} />
          </label>
          <label>
            Address:
            <input type="text" name="address" required={true} />
          </label>
          <div className="bottomInfo">
            <div className="total">
              Total: ${priceConverter(this.props.total)}
            </div>

            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

const mapState = state => ({
  total: state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ),
  items: state.cart.items
})

const mapDispatch = {addGuestInfo, getGuestCart, deleteGuestCart}

export default connect(mapState, mapDispatch)(GuestCheckout)
