import axios from 'axios'

// ACTION TYPES
const ADDED_PRODUCT = 'ADDED_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'
const FETCH_CART = 'FETCH_CART'

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

let initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART:
    console.log("STUFFF INSIDE",action.cart[0].items)
    const products = action.cart[0].items.map(item => item.product)
      return [...state, products]
    default:
      return state
  }
}
