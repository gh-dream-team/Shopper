import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {increaseQuantity, decreaseQuantity, deleteItem} from '../store/cart.js'
import {connect} from 'react-redux'
import './CartItemView.css'
import {priceConverter} from '../utils'

class CartItemView extends Component {
  render() {
    const {cartProducts, product, deleteItem} = this.props
    const cartProduct = cartProducts[0]
    const updatedPrice = priceConverter(cartProduct.price)
    return (
      <div className="cartItemViewContainer">
        <div className="cartItemImage">
          <img src={cartProduct.imageUrl} />
        </div>
        <Link to={`/products/${cartProduct.id}`}>
          <div className="cartItemName">{cartProduct.name}</div>
        </Link>
        <div className="cartItemPrice">Price: ${updatedPrice}</div>
        <div className="cartItemQuantity">Quantity:{cartProduct.quantity}</div>
        <div className="quantityButtons">
          <div className="addButton">
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
          </div>
          <div className="decreaseButton">
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
            <div>
              <button type="button" onClick={() => deleteItem(cartProduct.id)}>
                Delete Item
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatch = {increaseQuantity, decreaseQuantity, deleteItem}

const mapState = (state, ownProps) => ({
  cartProducts: state.cart.items.filter(item => item.id === ownProps.product.id)
})

export default connect(mapState, mapDispatch)(CartItemView)
