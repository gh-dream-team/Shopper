import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {addProduct} from '../store/cart.js'
import {connect} from 'react-redux'

class ItemView extends Component {
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
        <div className="itemPrice">{product.price}</div>
        <div className="addToCart">
          <button type="button" onClick={this.props.addProduct(product.id)}>
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
