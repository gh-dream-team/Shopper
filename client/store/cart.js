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

export default function(state = initialState, action) {
  switch (action.type) {
    case ADDED_PRODUCT:
      if (state.length === 0) {
        return [action.product]
      }
      let bool = false
      state.map(product => {
        if (action.product.id === product.id) {
          bool = true
          return [...state, {...product, quantity: product.quantity++}]
        }
      })
      if (bool === false) {
        return [...state, action.product]
      }
    default:
      return state
  }
}
