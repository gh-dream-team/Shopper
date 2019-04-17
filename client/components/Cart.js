import React, {Component} from 'react'
import {connect} from 'react-redux'
import ItemView from './ItemView'

class Cart extends Component {
    //need to add a comp-did-mount
    //add a dispatch func to get call from cart 

  render() {
    const {cart} = this.props
    console.log("ITEMS", cart)
    console.log("PROPS",this.props)
    return (
    <div>
    <h1>WELCOME TO CART</h1>
    {cart.map(item => (
      <ItemView key={item.id} product={item} />
    ))}
    </div>)
  }
}

const mapState = state => ({
  cart: state.cart
})

export default connect(mapState)(Cart)