import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {increaseQuantity, decreaseQuantity} from '../store/cart.js'
import {connect} from 'react-redux'
import {priceConverter} from '../utils'

class CartItemView extends Component {
  render() {
    const {cartProducts, product} = this.props
    const cartProduct = cartProducts[0]
    const updatedPrice = priceConverter(cartProduct.price)
    return (
      <div className="itemViewContainer">
        <div className="itemImage">
          <img src={cartProduct.imageUrl} />
        </div>
        <Link to={`/products/${cartProduct.id}`}>
          <div className="itemName">{cartProduct.name}</div>
        </Link>
        <div className="itemPrice">Price: ${updatedPrice}</div>
        <div className="itemQuantity">Quantity:{cartProduct.quantity}</div>
        {cartProduct.quantity < cartProduct.inventory ? (
          <button
            type="button"
            onClick={() => this.props.increaseQuantity(product.id)}
          >
            +
          </button>
        ) : (
          <div />
        )}
        {cartProduct.quantity > 1 ? (
          <button
            type="button"
            onClick={() => this.props.decreaseQuantity(product.id)}
          >
            -
          </button>
        ) : (
          <div />
        )}
      </div>
    )
  }
}

const mapDispatch = {increaseQuantity, decreaseQuantity}

const mapState = (state, ownProps) => ({
  cartProducts: state.cart.items.filter(item => item.id === ownProps.product.id)
})

export default connect(mapState, mapDispatch)(CartItemView)
