import React from 'react'
import {connect} from 'react-redux'
import {priceConverter} from '../utils'
import PropTypes from 'prop-types'
import './Checkout.css'

export class Checkout extends React.Component {
  render() {
    const {order} = this.props
    const total = this.props.location.total
    if (order.id) {
      return (
        <div className="receiptContainer">
          <h1>Thank you for your order!</h1>
          <p>
            Your recent order on the Ninety's Shopper Online Store has been
            received.
          </p>
          <p>Order total: ${priceConverter(total)}</p>
          <hr />
          <h3>Your order number is {order.id}</h3>
          <hr />
          <p>Your shipping address is {order.address}</p>
        </div>
      )
    } else {
      return <div />
    }
  }
}

const mapState = state => ({
  order: state.cart.order
})

export default connect(mapState)(Checkout)

Checkout.propTypes = {
  // email: PropTypes.string
  total: PropTypes.number
}
