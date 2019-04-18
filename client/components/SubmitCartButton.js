import React from 'react'

const SubmitCartButton = (props) => {
    return(
        <button
        type="button"
        onClick={() => props.addCart(props.cart)}
        >
        Checkout
        </button>
    )
}

export default SubmitCartButton