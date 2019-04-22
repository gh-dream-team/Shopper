import React from 'react'

export default class GuestCheckout extends React.Component {
  componentDidMount() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    //do something here
  }
  render() {
    return (
      <div className='guestCheckoutForm'>
      <form onSubmit={this.handleClick}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Address:
        <input type="text" name="address" />
      </label>
      </form>
      </div>
    )
  }
}
