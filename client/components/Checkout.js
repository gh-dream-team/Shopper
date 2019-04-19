import React from 'react'

const Checkout = (props) => {
    const {total, address} = props
    return(
        <div>
            <h1>Thank you for your order!</h1>
            <h3>Your recent order on the Ninety's Shopper Online Store has been received.</h3>
            <p>Order total: {total}</p>
            <hr/>
            <p>Shipping to: {address}</p>
        </div>
    )
}

export default Checkout

//need to be able to pass in props of total and address from cart view.  This page should only appear after a user has clicked the submit button