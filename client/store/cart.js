import axios from 'axios'

//ACTION TYPES
const ADDED_PRODUCT = 'ADDED_PRODUCT'

//ACTION CREATORS
const addedProduct = cart => ({
  type: ADDED_PRODUCT,
  cart
})

//THUNK
export const addProduct = id => async dispatch => {
  try {
    const {data} = await axios.put(`/api/products/${id}`)
    console.log('This should be the guest cart?', data)
    // dispatch(addedProduct(data))
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
    // return action.cart
    default:
      return state
  }
}
