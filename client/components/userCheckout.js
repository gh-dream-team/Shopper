import React from 'react'
import {connect} from 'react-redux'
import {checkout} from '../store/userOrder'

class UserCheckout extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(id) {
    checkout(id)
    return this.props.history.push('/user-order')
  }
  render() {
    const {user, checkout} = this.props
    console.log('props in userCheckout', this.props)
    return <button onClick={this.handleClick(user.id)}>Submit Order </button>
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = {checkout}
export default connect(mapState, mapDispatch)(UserCheckout)
