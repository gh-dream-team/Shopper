import axios from 'axios'
import {runInNewContext} from 'vm'

//ACTION TYPES
const ORDER = 'ORDER'
const ORDER_HISTORY = 'ORDER_HISTORY'

//ACTION CREATORS

const addOrder = (order, total) => ({
  type: ORDER,
  order,
  total
})

const orderHistory = orders => ({
  type: ORDER_HISTORY,
  orders
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

export const fetchOrders = id => async dispatch => {
  try {
    let {data} = await axios.get(`api/carts/orders/${id}`)
    dispatch(orderHistory(data))
  } catch (error) {
    console.error(error)
  }
}

const initialState = {order: {}, total: 0, orderHistory: []}

export default function(state = initialState, action) {
  switch (action.type) {
    case ORDER:
      return {...state, order: action.order, total: action.total}
    case ORDER_HISTORY:
      // const items = action.orders.map(allItems => allItems.items)
      return {
        ...state,
        orderHistory: action.orders
      }
    default:
      return state
  }
}
