import React from 'react'
import {connect} from 'react-redux'
import AddToCartForm from './addToCart'
import SearchBarForm from './searchBar'

class DisplayInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      page: 1,
      searchString: '',
      products: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitSearch = this.submitSearch.bind(this)
  }

  submitSearch(evt) {
    evt.preventDefault()
    const filteredArr = this.props.products.filter(curr => {
      //Returns names that matches searchStrings are subString of
      return (
        curr.name
          .toLowerCase()
          .indexOf(this.state.searchString.toLowerCase()) >= 0
      )
    })

    if (filteredArr.length) {
      this.setState({products: filteredArr, page: 1})
    } else {
      // eslint-disable-next-line no-alert
      alert('No match was found!')
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  componentDidMount() {
    if (!this.state.products.length) {
      this.setState({products: this.props.products})
    }
  }

  render() {
    //Resizing the amount of ambibos to view
    const start = (this.state.page - 1) * 8
    const focus = this.state.products.length
      ? this.state.products.slice(start, start + 8)
      : this.props.products.slice(start, start + 8)

    //The amount of page-numbers
    const numPages = this.state.products.length
      ? Math.ceil(this.state.products.length / 8)
      : Math.ceil(this.props.products.length / 8)

    const startPage =
      Number(this.state.page) - 1 > 0 ? Number(this.state.page) - 1 : 1
    const endPage =
      Number(this.state.page) + 2 < numPages
        ? Number(this.state.page) + 2
        : Number(numPages)

    const pageArray = []
    for (let i = startPage; i <= endPage; i++) {
      pageArray.push(i)
    }

    return (
      <div id="all-products-view">
        <SearchBarForm
          change={this.handleChange}
          submitSearch={this.submitSearch}
        />

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
          {Number(this.state.page) - 1 > 1 ? (
            <span>
              <button
                type="button"
                onClick={this.handleChange}
                name="page"
                value="1"
              >
                1{' '}
              </button>
              ...
            </span>
          ) : (
            ''
          )}
          {pageArray.map(curr => {
            return (
              <button
                type="button"
                key={curr}
                onClick={this.handleChange}
                name="page"
                value={curr}
              >
                {curr}
              </button>
            )
          })}{' '}
          {Number(this.state.page) + 2 < numPages ? (
            <span>
              {' '}
              ...
              <button
                type="button"
                onClick={this.handleChange}
                name="page"
                value={numPages}
              >
                {' '}
                {numPages}{' '}
              </button>
            </span>
          ) : (
            ''
          )}
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
