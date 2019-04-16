import React, {Component} from 'react'
import {addProduct} from '../store/cart.js'
import {connect} from 'react-redux'

export class ItemView extends Component {
  render() {
    const {product} = this.props
    return (
      <div className="itemViewContainer">
        <div className="itemImage">
          <img src={product.imageUrl} />
        </div>
        <div className="itemName">{product.name}</div>
        <div className="itemPrice">{product.price}</div>
        <div className="addToCart">
          <button type="button" onClick={this.addProduct(product.id)}>
            Add to cart
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  addProduct: id => dispatch(addProduct(id))
})

export default connect(null, mapDispatch)(ItemView)
