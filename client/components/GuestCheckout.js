import React from 'react'
import {connect} from 'react-redux'
import {addGuestInfo, getGuestCart} from '../store/cart'
import './GuestCheckout.css'

class GuestCheckout extends React.Component {
  constructor() {
    super()
    // this.state = {
    //   redirect: false
    // }
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
    return this.props.history.push('/order-info')
    // this.setState({redirect: true})
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
            <input type="text" name="email" required={true} />
          </label>
          <label>
            Address:
            <input type="text" name="address" required={true} />
          </label>
          <div className="bottomInfo">
            <div className="total">Total: ${this.props.total}</div>

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

const mapDispatch = {addGuestInfo, getGuestCart}

export default connect(mapState, mapDispatch)(GuestCheckout)
