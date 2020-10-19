import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  AllProductDisplay,
  CartDisplay,
  Login,
  Signup,
  UserHome
} from './components'
import {me} from './store'
import {fetchProducts} from './store/products'
import {fetchOrder} from './store/order'
import {fetchCart} from './store/cart'

/**
 * COMPONENT
 */
class Routes extends Component {
  constructor() {
    super()
    this.state = {
      isUserAuthenticated: false
    }
  }

  componentDidMount() {
    this.props.loadInitialData()
    this.props.getProducts()
  }

  componentDidUpdate() {
    if (this.props.userId) {
      this.props.getOrder(this.props.userId)
      this.props.getCart(this.props.userId)
    }
    if (this.props.isLoggedIn && !this.state.isUserAuthenticated) {
      this.setState({isUserAuthenticated: true})
    }
  }

  render() {
    const {isLoggedIn} = this.props
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={AllProductDisplay} />

        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/products" component={AllProductDisplay} />
        <Route path="/cart" component={CartDisplay} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        )}

        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    getProducts: () => dispatch(fetchProducts()),
    getOrder: id => dispatch(fetchOrder(id)),
    getCart: id => dispatch(fetchCart(id))
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
