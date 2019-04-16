import React from 'react'

export const ItemView = props => {
  const {product, handleClick} = props
  return (
    <div className="itemViewContainer">
      <div className="itemImage">
        <img src={product.imageUrl} />
      </div>
      <div className="itemName">{product.name}</div>
      <div className="itemPrice">{product.price}</div>
      <div className="addToCart">
        <button type="button" onClick={event => handleClick(product.id)}>
          Add to cart
        </button>
      </div>
    </div>
  )
}
