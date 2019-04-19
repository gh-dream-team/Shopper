import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import ItemView from './ItemView'

class AllProducts extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const {products} = this.props

    return products.map(product => (
      <ItemView key={product.id} product={product} />
    ))
  }
}

const mapState = state => ({
  products: state.products
})

const mapDispatch = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mapState, mapDispatch)(AllProducts)
