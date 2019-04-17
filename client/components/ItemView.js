import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {addProduct, addToCart} from '../store/cart.js'
import {connect} from 'react-redux'

class ItemView extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(id) {
    this.props.addProduct(id)
    this.props.addToCart(this.props.cart)
  }
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
          <button type="button" onClick={() => this.handleClick(product.id)}>
            Add to cart
          </button>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  cart: state.cart
})
const mapDispatch = dispatch => ({
  addProduct: id => dispatch(addProduct(id)),
  addToCart: cart => dispatch(addToCart(cart))
})

export default connect(mapState, mapDispatch)(ItemView)
