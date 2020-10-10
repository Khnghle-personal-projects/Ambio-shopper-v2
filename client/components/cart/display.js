import React from 'react'
import {connect} from 'react-redux'

class DisplayInfo extends React.Component {
  render() {
    const {products} = this.props
    return (
      <div>
        {products.map(curr => (
          <div key={curr.id}>
            <div>{curr.name}</div>
            <img src={curr.pic} className="image-display" />
            <div>{curr.price}</div>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.product
  }
}

export default connect(mapState, null)(DisplayInfo)
