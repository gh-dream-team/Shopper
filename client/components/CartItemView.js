import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {increaseQuantity, decreaseQuantity} from '../store/cart.js'
import {connect} from 'react-redux'
import './CartItemView.css'

class CartItemView extends Component {
  render() {
    const {cartProducts, product} = this.props
    const cartProduct = cartProducts[0]
    if (cartProduct.quantity > 0) {
      return (
        <div className="cartItemViewContainer">
          <div className="cartItemImage">
            <img src={cartProduct.imageUrl} />
          </div>
          <Link to={`/products/${cartProduct.id}`}>
            <div className="cartItemName">{cartProduct.name}</div>
          </Link>
          <div className="cartItemPrice">Price: ${cartProduct.price / 100}</div>
          <div className="cartItemQuantity">
            Quantity:{cartProduct.quantity}
          </div>
          <div className="quantityButtons">
            <div className="addButton">
              <button onClick={() => this.props.increaseQuantity(product.id)}>
                +
              </button>
            </div>
            <div className="decreaseButton">
              <button onClick={() => this.props.decreaseQuantity(product.id)}>
                -
              </button>
            </div>
          </div>
        </div>
      )
    } else {
      return <p />
    }
  }
}

const mapDispatch = {increaseQuantity, decreaseQuantity}

const mapState = (state, ownProps) => ({
  cartProducts: state.cart.items.filter(item => item.id === ownProps.product.id)
})

export default connect(mapState, mapDispatch)(CartItemView)
