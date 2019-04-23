import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {increaseQuantity, decreaseQuantity} from '../store/cart.js'
import {connect} from 'react-redux'

class CartItemView extends Component {
  render() {
    const {cartProducts, product} = this.props
    const cartProduct = cartProducts[0]
    if (cartProduct.quantity > 0) {
      return (
        <div className="itemViewContainer">
          <div className="itemImage">
            <img src={cartProduct.imageUrl} />
          </div>
          <Link to={`/products/${cartProduct.id}`}>
            <div className="itemName">{cartProduct.name}</div>
          </Link>
          <div className="itemPrice">Price: ${cartProduct.price / 100}</div>
          <div className="itemQuantity">Quantity:{cartProduct.quantity}</div>
          <button onClick={() => this.props.increaseQuantity(product.id)}>
            +1
          </button>
          <button onClick={() => this.props.decreaseQuantity(product.id)}>
            -1
          </button>
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
