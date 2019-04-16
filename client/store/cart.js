import axios from 'axios'

//ACTION TYPES
const ADDED_PRODUCT = 'ADDED_PRODUCT'

//ACTION CREATORS
const addedProduct = product => ({
  type: ADDED_PRODUCT,
  product
})

//THUNK
export const addProduct = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch(addedProduct(data))
  } catch (error) {
    console.error(error)
  }
}

let initialState = []

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_PRODUCT:
      return [...state, action.product]
    default:
      return state
  }
}

export default cartReducer
