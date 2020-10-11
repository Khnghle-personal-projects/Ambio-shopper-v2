import React from 'react'
import {connect} from 'react-redux'
import AddToCartForm from './addToCart'
import SearchBarForm from './searchBar'

class DisplayInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 1
    }
  }
  render() {
    const {products} = this.props

    //Resizing the amount of ambibos to view
    const start = (this.state.page - 1) * 8
    const focus = products.slice(start, start + 8)

    //The amount of page-numbers
    const numPages = Math.ceil(products.length / 8)
    const startPage = this.state.page - 1 > 0 ? this.state.page - 1 : 1
    const endPage =
      this.state.page + 3 <= numPages ? this.state.page + 3 : numPages

    const pageArray = []
    for (let i = startPage; i <= endPage; i++) {
      pageArray.push(i)
    }

    return (
      <div id="all-products-view">
        <SearchBarForm />

        <div className="item-container">
          {focus.map(curr => (
            <div key={curr.id} className="single-item">
              <img src={curr.pic} className="image-display" />
              <div className="item-name">{curr.name}</div>
              <div>Price: ${curr.price}</div>
              <AddToCartForm item={curr} />
            </div>
          ))}
        </div>

        <div className="page-numbers">
          {this.state.page - 1 > 1 ? `${1}...` : ''}
          {pageArray.map(curr => {
            return (
              <button
                type="button"
                key={curr}
                onClick={() => this.setState({page: curr})}
              >
                {curr}
              </button>
            )
          })}{' '}
          {this.state.page + 3 < numPages ? `...${numPages}` : ''}
        </div>
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
