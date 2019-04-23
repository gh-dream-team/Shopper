// import React from 'react'
// import {connect} from 'react-redux'
// import {checkout} from '../store/userOrder'

// class UserCheckout extends React.Component {
//   constructor() {
//     super()
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick(id) {
//     this.props.checkout(id)
//     // return this.props.history.push('/user-order')
//   }
//   render() {
//     const {user, checkout} = this.props

//     return (
//       <div>
//         <button type="button" onClick={() => checkout(user.id)}>
//           Submit Order{' '}
//         </button>
//       </div>
//     )
//   }
// }

// const mapState = state => ({
//   user: state.user
// })

// const mapDispatch = {checkout}
// export default connect(mapState, mapDispatch)(UserCheckout)

//  added into the userCart to make history.push work
