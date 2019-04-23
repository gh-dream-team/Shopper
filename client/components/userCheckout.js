import React from 'react'
import {connect} from 'react-redux'
import {checkout} from '../store/userOrder'
import {priceConverter} from '../utils'

function UserCheckout () {
const {user} = this.props
return(

)
}

const mapState = state => ({
    user: state.user,
    
  })
  
  const mapDispatch = {checkout}
  export default connect(mapState, mapDispatch)(UserCheckout)