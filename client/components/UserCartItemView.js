import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import {addProduct} from '../store/cart.js'
import {connect} from 'react-redux'

class UserCartItemView extends Component {
  render() {
    const {products} = this.props
    console.log("PRODUCTS", products)

    return (
        products.map(product => 
        <div className="itemViewContainer" key={product.id}>
        <div className="itemImage">
          <img src={product.imageUrl} />
        </div>
        <Link to={`/products/${product.id}`}>
          <div className="itemName">{product.name}</div>
        </Link>
        <div className="itemPrice">Price: ${product.price}</div>
        <div className="itemQuantity">Quantity:{product.quantity}</div>
      </div>
      )
    )
  }
}

// const mapDispatch = dispatch => ({
//   addProduct: id => dispatch(addProduct(id))
// })

export default connect(null)(UserCartItemView)
