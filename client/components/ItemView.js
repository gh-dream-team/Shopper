import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {addProduct} from '../store/cart.js'
import {addToCartDb} from '../store/userCart'
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
          <button
            type="button"
            onClick={() => this.props.addToCartDb(this.props.user.id, product)}
          >
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
  addProduct: id => dispatch(addProduct(id)),
  addToCartDb: (userId, product) => dispatch(addToCartDb(userId, product))
})

export default connect(mapState, mapDispatch)(ItemView)
