import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import {addProduct} from '../store/cart.js'
import {connect} from 'react-redux'

class UserCartItemView extends Component {
  render() {
    const {product} = this.props
    console.log("PRODUCTS", product)

    return (
        <div>HELLOO</div>

    )
  }
}

// const mapDispatch = dispatch => ({
//   addProduct: id => dispatch(addProduct(id))
// })

export default connect(null)(UserCartItemView)
