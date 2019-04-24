import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOrders} from '../store/userOrder'
import UserAcountOrder from './UserAccountOrder'
import './UserAccount.css'

class UserAcount extends Component {
  componentDidMount() {
    this.props.fetchOrders(this.props.user.id)
  }
  render() {
    const {user, userOrder} = this.props
    return (
      <div className="container">
        <div className="userName">Username: {user.username}</div>
        <div className="email">Email: {user.email}</div>
        <div className="address">Address: {user.address}</div>
        <div className="orderHistory">Order History</div>
        {userOrder.orderHistory.map(order => (
          <UserAcountOrder key={order.id} order={order} />
        ))}
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user,
  userOrder: state.userOrder
})

const mapDispatch = dispatch => ({
  fetchOrders: id => dispatch(fetchOrders(id))
})

export default connect(mapState, mapDispatch)(UserAcount)
