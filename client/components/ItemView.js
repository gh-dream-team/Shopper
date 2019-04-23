import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {addGuestProduct} from '../store/cart.js'
import {addToCartDb, addProduct} from '../store/userCart'
import {connect} from 'react-redux'
import {priceConverter} from '../utils'
import './ItemView.css'

class ItemView extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const {product, user} = this.props
    if (user.username) {
      this.props.addToCartDb(product)
      this.props.addProduct(product.id)
    } else {
      this.props.addGuestProduct(product.id)
    }
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
        <div className="itemPrice">Price: ${priceConverter(product.price)}</div>
        <div className="addToCart">
          <button type="button" onClick={this.handleClick}>
            Add to cart
          </button>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  addGuestProduct: id => dispatch(addGuestProduct(id)),
  addProduct: id => dispatch(addProduct(id)),
  addToCartDb: product => dispatch(addToCartDb(product))
})

export default connect(mapState, mapDispatch)(ItemView)
