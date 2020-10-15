import React from 'react'
import {connect} from 'react-redux'
import CartItem from './cartItems'
import BillingInfo from './billingInfo'
import PaymentInfo from './paymentInfo'

class CartInfo extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="cart-display">
        <div>
          <BillingInfo />
          <PaymentInfo />
        </div>
        {this.props.cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            orderId={this.props.orderId}
            userId={this.props.userId}
          />
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: state.cart,
    orderId: state.order.id,
    userId: state.user.id
  }
}

export default connect(mapState, null)(CartInfo)
