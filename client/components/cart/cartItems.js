import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteItemThunk} from '../../store/cart'
import AddToCart from '../products/addToCart'

function CartItem(props) {
  const {item, userId, orderId} = props
  const [qty, setQty] = useState(item.cart.qty)
  const dispatch = useDispatch()

  function changeQty(newQty) {
    setQty(newQty)
  }

  return (
    <div>
      <div key={item.id} className="cart-item single-item">
        <i
          className="fas fa-times"
          onClick={() => dispatch(deleteItemThunk(userId, orderId, item.id))}
        />

        <img src={item.pic} />
        <div className="item-name">{item.name}</div>
        <div>${item.price}</div>
        <div>{qty} item</div>

        <AddToCart
          text="Update"
          userId={userId}
          orderId={orderId}
          itemId={item.id}
          changeQty={changeQty}
        />
      </div>
    </div>
  )
}

export default CartItem
