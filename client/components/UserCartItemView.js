import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  deleteProduct,
  addToQuantity,
  deleteFromQuantity
} from '../store/userCart'
import {priceConverter} from '../utils'
import './CartItemView.css'

class UserCartItemView extends Component {
  render() {
    const {userCart} = this.props

    return userCart[0].map(product => (
      <div className="cartItemViewContainer" key={product.product.id}>
        <div className="cartItemImage">
          <img src={product.product.imageUrl} />
        </div>
        <Link to={`/products/${product.product.id}`}>
          <div className="cartItemName">{product.product.name}</div>
        </Link>
        <div className="cartItemPrice">
          Price: ${priceConverter(product.product.price)}
        </div>
        <div className="cartItemQuantity">Quantity:{product.quantity}</div>
        <div className="quantityButtons">
          <div className="decreaseButton">
            {product.quantity > 1 ? (
              <button
                type="button"
                onClick={() => this.props.deleteFromQuantity(product.product)}
              >
                {' '}
                -{' '}
              </button>
            ) : (
              <div />
            )}
          </div>
          <div className="addButton">
            {product.quantity < product.product.inventory ? (
              <button
                type="button"
                onClick={() => this.props.addToQuantity(product.product)}
              >
                {' '}
                +{' '}
              </button>
            ) : (
              <div />
            )}
          </div>
          <div className="deleteButton">
            <button
              type="button"
              onClick={() => this.props.deleteProduct(product.product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))
  }
}

const mapState = state => ({
  userCart: state.userCart
})

const mapDispatch = dispatch => ({
  deleteProduct: product => dispatch(deleteProduct(product)),
  addToQuantity: product => dispatch(addToQuantity(product)),
  deleteFromQuantity: product => dispatch(deleteFromQuantity(product))
})

export default connect(mapState, mapDispatch)(UserCartItemView)
