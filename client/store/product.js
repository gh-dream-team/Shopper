import axios from 'axios'

//ACTION TYPE
const GET_PRODUCT = 'GET_PRODUCT'

//ACTION CREATOR
const gettingProduct = product => ({
  type: GET_PRODUCT,
  product
})

//THUNK
export const getProduct = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch(gettingProduct(data))
  } catch (error) {
    console.error(error)
  }
}

const initialState = {}
//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product
    default:
      return state
  }
}
