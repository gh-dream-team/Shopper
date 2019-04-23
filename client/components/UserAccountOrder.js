import React, {Component} from 'react'
import {priceConverter} from '../utils'

import './UserAccount.css'

class UserAcountOrder extends Component {
  render() {
    const {order} = this.props
    return (
      <div className="orderContainer">
        <div className="orderID">Order ID: {order.id}</div>
        <div className="order">
          {order.items.map(item => (
            <div className="orderProduct" key={item.id}>
              <div className="productName">{item.product.name}</div>
              <img className="img" src={item.product.imageUrl} />
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${priceConverter(item.product.price)}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default UserAcountOrder
