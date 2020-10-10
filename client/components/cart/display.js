import React from 'react'
import {connect} from 'react-redux'

class DisplayInfo extends React.Component {
  constructor() {
    super()
  }
  render() {
    const {products} = this.props
    return (
      <div className="item-container">
        {products.map(curr => (
          <div key={curr.id} className="single-item">
            <img src={curr.pic} className="image-display" />
            <div className="item-name">{curr.name}</div>
            <div>Price: ${curr.price}</div>

            <form>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="6">7</option>
                <option value="6">8</option>
                <option value="6">9</option>
              </select>
              <button type="button">Add to cart</button>
            </form>
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
