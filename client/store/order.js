import axios from 'axios'
/**
 * ACTION TYPES
 */
const GET_ORDER = 'GET_ORDER'

/**
 * ACTION CREATORS
 */

export const getOrder = order => ({type: GET_ORDER, order})

/**
 * THUNK CREATORS
 */
export const fetchOrder = userId => {
  return async function(dispatch) {
    try {
      const {data} = await axios.get(`/api/cart/${userId}`)
      dispatch(getOrder(data))
    } catch (error) {
      console.log(error)
    }
  }
}

//INITIAL STATE
const initialState = {}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDER:
      return action.order
    default:
      return state
  }
}
