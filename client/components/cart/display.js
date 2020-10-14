import React from 'react'
import {connect} from 'react-redux'
import CartItem from './cartItems'
import BillingInfo from './billingInfo'
import PaymentInfo from './paymentInfo'

class CartInfo extends React.Component {
  componentDidMount() {
    console.log(this.props.cart)
  }
  render() {
    return (
      <div className="cart-display">
        <div>
          <BillingInfo />
          <PaymentInfo />
        </div>
        <CartItem cartItems={this.props.cart} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapState, null)(CartInfo)
