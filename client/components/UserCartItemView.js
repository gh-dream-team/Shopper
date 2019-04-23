import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  deleteProduct,
  addToQuantity,
  deleteFromQuantity
} from '../store/userCart'
import {priceConverter} from '../utils'

class UserCartItemView extends Component {
  render() {
    const {userCart, user} = this.props

    return userCart[0].map(product => (
      <div className="itemViewContainer" key={product.product.id}>
        <div className="itemImage">
          <img src={product.product.imageUrl} />
        </div>
        <Link to={`/products/${product.product.id}`}>
          <div className="itemName">{product.product.name}</div>
        </Link>
        <div className="itemPrice">
          Price: ${priceConverter(product.product.price)}
        </div>
        <div className="itemQuantity">Quantity:{product.quantity}</div>
        {product.quantity > 1 ? (
          <button
            type="button"
            onClick={() =>
              this.props.deleteFromQuantity(product.product, user.id)
            }
          >
            {' '}
            -{' '}
          </button>
        ) : (
          <div />
        )}
        {product.quantity < product.product.inventory ? (
          <button
            type="button"
            onClick={() => this.props.addToQuantity(product.product, user.id)}
          >
            {' '}
            +{' '}
          </button>
        ) : (
          <div />
        )}
        <button
          type="button"
          onClick={() => this.props.deleteProduct(product.product.id, user.id)}
        >
          Delete
        </button>
      </div>
    ))
  }
}

const mapState = state => ({
  userCart: state.userCart,
  user: state.user
})

const mapDispatch = dispatch => ({
  deleteProduct: (product, id) => dispatch(deleteProduct(product, id)),
  addToQuantity: (product, id) => dispatch(addToQuantity(product, id)),
  deleteFromQuantity: (product, id) => dispatch(deleteFromQuantity(product, id))
})

export default connect(mapState, mapDispatch)(UserCartItemView)
