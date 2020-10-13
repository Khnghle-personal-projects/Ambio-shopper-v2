import React from 'react'
import {connect} from 'react-redux'

class CartInfo extends React.Component {
  render() {
    return <div> Hello World </div>
  }
}

const mapState = state => {
  return {
    products: state.product
  }
}

export default connect(mapState, null)(CartInfo)
