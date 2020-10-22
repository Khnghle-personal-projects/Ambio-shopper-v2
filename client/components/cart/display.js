import React from 'react'
import {connect} from 'react-redux'
import CartItem from './cartItems'
import BillingInfo from './billingInfo'
import PaymentInfo from './paymentInfo'

class CartInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      sum: 0,
      tax: 0,
      total: 0
    }
  }

  componentDidUpdate() {
    const cart = this.props.cart
    let sum = 0
    cart.forEach(product => {
      sum += product.price * product.cart.qty
    })

    if (this.state.sum !== sum.toFixed(2)) {
      this.setState({
        sum: sum.toFixed(2),
        tax: (sum * 0.0625).toFixed(2),
        total: (sum * 1.0625).toFixed(2)
      })
    }
  }

  render() {
    const cartDisplay = this.props.cart || []

    return (
      <div className="cart-display">
        <div className="col-50">
          <div className="container">
            <div className="row">
              <BillingInfo />
              <PaymentInfo />
            </div>
          </div>
        </div>
        <div className="col-50">
          {cartDisplay.map(item => (
            <CartItem
              key={item.id}
              item={item}
              orderId={this.props.orderId}
              userId={this.props.userId}
            />
          ))}

          <div>Cost: {this.state.sum}</div>
          <div>Tax: {this.state.tax}</div>
          <div>Total: {this.state.total}</div>
          <div>Test Test Test</div>
        </div>
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
