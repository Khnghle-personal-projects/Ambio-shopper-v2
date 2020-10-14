import React from 'react'

function CartItem(props) {
  const {cartItems} = props
  return (
    <div>
      {cartItems.map(item => {
        return (
          <div key={item.id} className="cart-item single-item">
            <img src={item.pic} />
            <div className="item-name">{item.name}</div>
            <div>${item.price}</div>
            <div>{item.cart.qty} item</div>
          </div>
        )
      })}
    </div>
  )
}

export default CartItem
