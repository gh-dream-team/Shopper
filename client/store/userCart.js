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
    // update the db
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

export const deleteProduct = (productId, id) => async dispatch => {
  try {
    const {data} = await axios.delete(`/api/carts/${productId}`)
    dispatch(deletedProduct(data))
    dispatch(fetchCart(id))
  } catch (error) {
    console.error(error)
  }
}

export const addToQuantity = (product, id) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/carts/increment`, product)
    console.log('DATA', data)
    dispatch(addQuantity(data))
    dispatch(fetchCart(id))
  } catch (error) {
    console.error(error)
  }
}

export const deleteFromQuantity = (product, id) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/carts/decrement`, product)
    dispatch(subtractQuantity(data))
    dispatch(fetchCart(id))
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
      state[0].map(product => {
        if (product.id === action.product.id) {
          product.quantity = action.product.quantity
        }
      })
      return state
    case SUBTRACT_FROM_QUANTITY:
      state[0].map(product => {
        if (product.id === action.product.id) {
          product.quantity = action.product.quantity
        }
      })
      return state
    case DELETE:
      state[0].filter(product => product.id !== action.id)
      return state
    default:
      return state
  }
}
