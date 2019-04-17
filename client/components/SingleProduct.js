import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getProduct} from '../store/product'
import {addProduct} from '../store/cart'

class SingleProduct extends Component {
  componentDidMount() {
    const id = this.props.match.params.productId
    this.props.getProduct(id)
  }
  render() {
    const {product} = this.props
    return (
      <div className="singleProductContainer">
        <div className="productImage">
          <img src={product.imageUrl} />
        </div>
        <div className="productName">{product.name}</div>
        <div className="productPrice">{product.price}</div>
        <div className="productDescription">{product.description}</div>
        <div className="addToCart">
          <button
            type="button"
            onClick={() => this.props.addProduct(product.id)}
          >
            Add to cart
          </button>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  product: state.product
})

const mapDispatch = dispatch => ({
  getProduct: id => dispatch(getProduct(id)),
  addProduct: id => dispatch(addProduct(id))
})

export default connect(mapState, mapDispatch)(SingleProduct)
