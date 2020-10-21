import React from 'react'
import {connect} from 'react-redux'
import {fetchCart, updateCart} from '../../store/cart'

class AddToCartForm extends React.Component {
  constructor() {
    super()
    this.state = {
      qty: 1
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  async onSubmit(evt) {
    evt.preventDefault()
    const {itemId, orderId, userId} = this.props
    const qty = this.state.qty
    await this.props.addItem(userId, orderId, itemId, qty)
    await this.props.grabCart(userId)
  }

  render() {
    return (
      <form className="add-to-cart-form" onSubmit={this.onSubmit}>
        <select name="qty" onChange={this.onChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        <button type="submit">{this.props.text}</button>
      </form>
    )
  }
}

function mapDispatch(dispatch) {
  return {
    addItem: (userId, orderId, productId, qty) =>
      dispatch(updateCart(userId, orderId, productId, qty)),
    grabCart: userId => dispatch(fetchCart(userId))
  }
}

export default connect(null, mapDispatch)(AddToCartForm)
