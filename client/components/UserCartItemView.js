import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  deleteProduct,
  addToQuantity,
  deleteFromQuantity
} from '../store/userCart'

class UserCartItemView extends Component {
  render() {
    const {products} = this.props
    return products.map(
      product =>
        product.quantity > 0 ? (
          <div className="itemViewContainer" key={product.product.id}>
            <div className="itemImage">
              <img src={product.product.imageUrl} />
            </div>
            <Link to={`/products/${product.product.id}`}>
              <div className="itemName">{product.product.name}</div>
            </Link>
            <div className="itemPrice">
              Price: ${product.product.price / 100}
            </div>
            <div className="itemQuantity">Quantity:{product.quantity}</div>
            <button
              type="button"
              onClick={() => this.props.deleteFromQuantity(product.product)}
            >
              {' '}
              -{' '}
            </button>
            <button
              type="button"
              onClick={() => this.props.addToQuantity(product.product)}
            >
              {' '}
              +{' '}
            </button>
            <button
              type="button"
              onClick={() => this.props.deleteProduct(product.product.id)}
            >
              Delete
            </button>
          </div>
        ) : (
          <p />
        )
    )
  }
}

const mapDispatch = dispatch => ({
  deleteProduct: product => dispatch(deleteProduct(product)),
  addToQuantity: product => dispatch(addToQuantity(product)),
  deleteFromQuantity: product => dispatch(deleteFromQuantity(product))
})

export default connect(null, mapDispatch)(UserCartItemView)
