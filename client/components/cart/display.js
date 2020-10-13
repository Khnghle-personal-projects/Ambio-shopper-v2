import React from 'react'
import {connect} from 'react-redux'
import CartItem from './cartItems'
import BillingInfo from './billingInfo'
import PaymentInfo from './paymentInfo'

class CartInfo extends React.Component {
  render() {
    return (
      <div>
        <BillingInfo />
        <PaymentInfo />
        <CartItem />
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.product
  }
}

export default connect(mapState, null)(CartInfo)
