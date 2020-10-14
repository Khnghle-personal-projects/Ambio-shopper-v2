import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CART = 'GET_CART'

/**
 * ACTION CREATORS
 */

export const getCart = cart => ({type: GET_CART, cart})

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

//INITIAL STATE
const initialState = []

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    default:
      return state
  }
}
