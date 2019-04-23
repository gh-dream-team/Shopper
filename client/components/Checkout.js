import React from 'react'
import {connect} from 'react-redux'
import './Checkout.css'

class Checkout extends React.Component {
  render() {
    const {order} = this.props
    if (order.id) {
      return (
        <div className="receiptContainer">
          <h1>Thank you for your order!</h1>
          <h3>
            Your recent order on the Ninety's Shopper Online Store has been
            received.
          </h3>
          <p>Order total: ${order.total / 100}</p>
          <hr />
          <p>Your order number is {order.id}</p>
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
