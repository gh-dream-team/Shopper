import axios from 'axios'

//ACTION TYPES
const ADDED_CART = 'ADDED_CART'
const LOADING = 'LOADING'
const ADD_QUANT = 'ADD_QUANT'
const EMPTY_CART = 'EMPTY_CART'
const ADD_INFO = 'ADD_INFO'

//ACTION CREATORS
const addedCart = cart => ({
  type: ADDED_CART,
  cart
})
const loading = bool => ({
  type: LOADING,
  loading: bool
})

const addQuant = cart => ({
  type: ADD_QUANT,
  cart
})

export const emptyCart = () => ({
  type: EMPTY_CART
})

const addInfo = info => ({
  type: ADD_INFO,
  info
})

//THUNK
export const addGuestProduct = id => async dispatch => {
  try {
    await axios.get(`/api/session/${id}`)
  } catch (error) {
    console.error(error)
  }
}

export const deleteGuestCart = () => async dispatch => {
  try {
    await axios.delete('api/session/clear')
    dispatch(emptyCart())
  } catch (err) {
    console.log('Problem in cart(guest) reducer in store:', err)
  }
}

const getCartItems = cart => async dispatch => {
  try {
    let itemIds = Object.keys(cart)
    let {data} = await axios.put('api/session/many', itemIds)
    dispatch(addedCart(data))
    dispatch(addQuant(cart))
    dispatch(loading(false))
  } catch (err) {
    console.log('Problem in cart(guest) reducer in store:', err)
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
export const addGuestInfo = (
  guestName,
  email,
  address,
  cart,
  total
) => async dispatch => {
  try {
    const guestInfo = {guestName, email, address, cart, total}
    const {data} = await axios.post('/api/guestpurchases', guestInfo)
    dispatch(addInfo(data))
  } catch (error) {
    console.error(error)
  }
}

export const increaseQuantity = id => async dispatch => {
  try {
    let {data} = await axios.put('/api/session/up', {id: id})
    dispatch(addQuant(data))
  } catch (err) {
    console.log('error increasing quantity in cart store', err)
  }
}

export const decreaseQuantity = id => async dispatch => {
  try {
    let {data} = await axios.put('/api/session/down', {id: id})
    dispatch(addQuant(data))
  } catch (err) {
    console.log('error increasing quantity in cart store', err)
  }
}

// https://stackoverflow.com/questions/37066266/return-value-from-an-async-function
// see console.log here or in cart component of the object that gets added to guestcartaray - how do we dig out the relevant object?
// could also try let ids = Object.keys(cart1) and then findAll with a {where: [Op.in]: ids} - but then how add the quantity??

let initialState = {
  items: [],
  loading: false,
  order: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADDED_CART:
      return {...state, items: action.cart}
    case LOADING:
      return {...state, loading: action.loading}
    case ADD_QUANT:
      return {
        ...state,
        items: state.items.map(item => {
          item.quantity = action.cart[item.id]

          return item
        })
      }
    case EMPTY_CART:
      return {...state, items: []}
    case ADD_INFO:
      return {...state, order: action.info}
    default:
      return state
  }
}
