import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class CartItemView extends Component {
  render() {
    const {product} = this.props

    return (
      <div className="itemViewContainer">
        <div className="itemImage">
          <img src={product.imageUrl} />
        </div>
        <Link to={`/products/${product.id}`}>
          <div className="itemName">{product.name}</div>
        </Link>
        <div className="itemPrice">Price: ${product.price / 100}</div>
        <div className="itemQuantity">Quantity:{product.quantity}</div>
      </div>
    )
  }
}

export default connect(null)(CartItemView)
