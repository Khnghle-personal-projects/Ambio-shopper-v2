import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'
const ADD_ITEM = 'ADD_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
/**
 * ACTION CREATORS
 */

export const getCart = cart => ({type: GET_CART, cart})
const addItem = (item, isCreated, productId) => ({
  type: ADD_ITEM,
  isCreated,
  item,
  productId
})
const deleteItem = itemId => ({type: DELETE_ITEM, itemId})

/**
 * THUNK CREATORS
 */
export const fetchCart = userId => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get(`/api/cart/${userId}`)
      dispatch(getCart(data.products))
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateCart = (userId, orderId, productId, qty) => {
  return async function(dispatch) {
    try {
      const {data} = await axios.post(
        `/api/cart/${userId}/${orderId}/${productId}`,
        {qty}
      )
      const [item, isCreated] = data
      dispatch(addItem(item, isCreated, productId))
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteItemThunk = (userId, orderId, productId) => {
  return async function(dispatch) {
    try {
      await axios.delete(`api/cart/${userId}/${orderId}/${productId}`)
      dispatch(deleteItem(productId))
    } catch (error) {
      console.log(error)
    }
  }
}

//INITIAL STATE
const initialState = []

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case ADD_ITEM:
      if (action.isCreated) return [...state, action.item]
      else
        return state.map(item => {
          console.log('searching...', item.cart.productId, action.productId)
          if (item.cart.productId === action.productId) return action.item
          else return item
        })
    case DELETE_ITEM:
      return state.filter(item => item.id !== action.itemId)
    default:
      return state
  }
}
