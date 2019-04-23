import axios from 'axios'

//ACTION TYPES
const ORDER = 'ORDER'

//ACTION CREATORS

const addOrder = (order, total) => ({
  type: ORDER,
  order,
  total
})

// Thunks
export const checkout = (id, total) => async dispatch => {
  try {
    let {data} = await axios.put(`api/carts/checkout/${id}`)
    console.log('total', total)
    dispatch(addOrder(data, total))
  } catch (err) {
    console.log('error in the userCart:', err)
  }
}

const initialState = {order: {}, total: 0}

export default function(state = initialState, action) {
  switch (action.type) {
    case ORDER:
      return {...state, order: action.order, total: action.total}
    default:
      return state
  }
}
