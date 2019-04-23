import axios from 'axios'

//ACTION TYPES
const ORDER = 'ORDER'

//ACTION CREATORS

const addOrder = order => ({
  type: ORDER,
  order
})

// Thunks
export const checkout = id => async dispatch => {
  try {
    let order = await axios.put(`api/carts/checkout/${id}`)
    dispatch(addOrder(order))
  } catch (err) {
    console.log('error in the userCart:', err)
  }
}

const initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    case ORDER:
      return action.order
    default:
      return state
  }
}
