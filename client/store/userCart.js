import axios from 'axios'

// ACTION TYPES
const ADDED_PRODUCT = 'ADDED_PRODUCT'
const ADD_TO_CART = 'ADD_TO_CART'

// ACTION CREATORS
const addedProduct = product => ({
  type: ADDED_PRODUCT,
  product
})

const addedToCartDb = cart => ({
  type: ADD_TO_CART,
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

let initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
