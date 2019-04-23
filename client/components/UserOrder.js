import React from 'react'
import {connect} from 'react-redux'
import {checkout} from '../store/userOrder'
import {priceConverter} from '../utils'

class UserCheckout extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {order, total} = this.props
    console.log('order', order, 'total:', total)
    return (
      <div>
        <h1>Thank you for your order!</h1>
        <h3>
          Your recent order on the Ninety's Shopper Online Store has been
          received.
        </h3>
        <p>Order total: ${priceConverter(total)}</p>
        <hr />
        <p>Your order number is {order.id}</p>
      </div>
    )
  }
}

const mapState = state => ({
  order: state.userOrder.order,
  total: state.userOrder.total
})

const mapDispatch = {checkout}
export default connect(mapState, mapDispatch)(UserCheckout)
