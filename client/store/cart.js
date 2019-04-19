import axios from 'axios'

//ACTION TYPES
const ADDED_CART = 'ADDED_CART'
const LOADING = 'LOADING'

//ACTION CREATORS
const addedCart = cart => ({
  type: ADDED_CART,
  cart
})
const loading = bool => ({
  type: LOADING,
  loading: bool
})

//THUNK
export const addProduct = id => async dispatch => {
  try {
    await axios.put(`/api/session/${id}`)
  } catch (error) {
    console.error(error)
  }
}

export const getGuestCart = () => async dispatch => {
  dispatch(loading(true))
  try {
    let {data} = await axios.get('/api/session')

    dispatch(getCartItems(data))
  } catch (err) {
    console.log('Problem in cart(guest) reducer in store:', err)
  }
}

const getCartItems = cart => async dispatch => {
  try {
    let itemIds = Object.keys(cart)
    console.log(itemIds[0])
    let items = await axios.get('api/products/many', itemIds)
    // let guestCartPromises = await Object.keys(cart).map(async key => {
    //   let {data} = await axios.get(`/api/products/${key}`)
    //   data.quantity = cart[key]
    //   return data
    // })
    // let guestCartArray = []
    // guestCartPromises.forEach(Oitem =>
    //   Oitem.then(item => guestCartArray.push(item))
    // )
    dispatch(addedCart(items))
    dispatch(loading(false))
  } catch (err) {
    console.log('Problem in cart(guest) reducer in store:', err)
  }
}

// https://stackoverflow.com/questions/37066266/return-value-from-an-async-function
// see console.log here or in cart component of the object that gets added to guestcartaray - how do we dig out the relevant object?
// could also try let ids = Object.keys(cart1) and then findAll with a {where: [Op.in]: ids} - but then how add the quantity??

let initialState = {
  items: [],
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADDED_CART:
      return {...state, items: action.cart}
    case LOADING:
      return {...state, loading: action.loading}
    default:
      return state
  }
}
