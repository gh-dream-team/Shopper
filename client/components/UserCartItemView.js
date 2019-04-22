import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import {addProduct} from '../store/cart.js'
import {connect} from 'react-redux'

class UserCartItemView extends Component {
  render() {
    const {products} = this.props

    return products.map(product => (
      <div className="itemViewContainer" key={product.product.id}>
        <div className="itemImage">
          <img src={product.product.imageUrl} />
        </div>
        <Link to={`/products/${product.product.id}`}>
          <div className="itemName">{product.product.name}</div>
        </Link>
        <div className="itemPrice">Price: ${product.product.price / 100}</div>
        <div className="itemQuantity">Quantity:{product.quantity}</div>
      </div>
    ))
  }
}

export default connect(null)(UserCartItemView)
