/* eslint-disable no-case-declarations */
import axios from 'axios'

// ACTION TYPES
const ADDED_PRODUCT = 'ADDED_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'
const FETCH_CART = 'FETCH_CART'
const ADD_TO_QUANTITY = 'ADD_TO_QUANTITY'
const SUBTRACT_FROM_QUANTITY = 'SUBTRACT_FROM_QUANTITY'
const DELETE = 'DELETE'

// ACTION CREATORS
const addedProduct = product => ({
  type: ADDED_PRODUCT,
  product
})

const addedToCartDb = cart => ({
  type: ADD_TO_CART,
  cart
})

const fetchedCart = cart => ({
  type: FETCH_CART,
  cart
})

const deletedProduct = id => ({
  type: DELETE,
  id
})

const addQuantity = product => ({
  type: ADD_TO_QUANTITY,
  product
})

const subtractQuantity = product => ({
  type: SUBTRACT_FROM_QUANTITY,
  product
})

// THUNK
export const addProduct = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch(addedProduct(data))
  } catch (error) {
    console.error(error)
  }
}

export const addToCartDb = product => async dispatch => {
  try {
    const {data} = await axios.put(`/api/carts`, product)
    dispatch(addedToCartDb(data))
  } catch (error) {
    console.error(error)
  }
}

export const fetchCart = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/carts/${id}`)
    dispatch(fetchedCart(data))
  } catch (error) {
    console.error(error)
  }
}

export const deleteProduct = productId => async dispatch => {
  try {
    const {data} = await axios.delete(`/api/carts/${productId}`)
    dispatch(deletedProduct(data))
  } catch (error) {
    console.error(error)
  }
}

export const addToQuantity = product => async dispatch => {
  try {
    const {data} = await axios.put(`/api/carts/increment`, product)
    console.log('DATA', data)
    dispatch(addQuantity(data))
  } catch (error) {
    console.error(error)
  }
}

export const deleteFromQuantity = product => async dispatch => {
  try {
    const {data} = await axios.put(`/api/carts/decrement`, product)
    dispatch(subtractQuantity(data))
  } catch (error) {
    console.error(error)
  }
}

let initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART:
      const products = action.cart[0].items.map(item => item)
      return [products]
    case ADD_TO_QUANTITY:
      const addedQuant = state[0].map(product => {
        if (product.id === action.product.id) {
          return {...product, quantity: action.product.quantity}
        } else {
          return product
        }
      })
      return [addedQuant]
    case SUBTRACT_FROM_QUANTITY:
      const deletedQuant = state[0].map(product => {
        if (product.id === action.product.id) {
          return {...product, quantity: action.product.quantity}
        } else {
          return product
        }
      })
      return [deletedQuant]
    case DELETE:
      const newState = state[0].filter(
        product => product.productId !== Number(action.id)
      )
      return [newState]
    default:
      return state
  }
}
