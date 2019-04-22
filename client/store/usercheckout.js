import axios from 'axios'

// ACTION TYPES
const UPDATE_INVENTORY = 'UPDATE_INVENTORY'

// ACTION CREATORS
const updateInventory = product => ({
  type: UPDATE_INVENTORY,
  product
})

// THUNK
export const updatedInventory = (id, products) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/products/${id}`, products)
    dispatch(updateInventory(data))
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