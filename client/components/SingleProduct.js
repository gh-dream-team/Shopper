import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getProduct} from '../store/product'
import {addGuestProduct} from '../store/cart'
import {addProduct, addToCartDb} from '../store/userCart'

class SingleProduct extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    const id = this.props.match.params.productId
    this.props.getProduct(id)
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
      <div className="singleProductContainer">
        <div className="productImage">
          <img src={product.imageUrl} />
        </div>
        <div className="productName">{product.name}</div>
        <div className="productPrice">{product.price}</div>
        <div className="productDescription">{product.description}</div>
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
  product: state.product,
  user: state.user
})

const mapDispatch = dispatch => ({
  getProduct: id => dispatch(getProduct(id)),
  addProduct: id => dispatch(addProduct(id)),
  addGuestProduct: () => dispatch(addGuestProduct()),
  addToCartDb: product => dispatch(addToCartDb(product))
})

export default connect(mapState, mapDispatch)(SingleProduct)
