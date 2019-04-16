import axios from 'axios'

// action types
const GOT_PRODUCTS = 'GOT_PRODUCTS'

// action creators
const gotProducts = products => ({
  type: GOT_PRODUCTS,
  products
})

// thunks
export const fetchProducts = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/products')
      dispatch(gotProducts(data))
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_PRODUCTS:
      return action.products
    default:
      return state
  }
}
