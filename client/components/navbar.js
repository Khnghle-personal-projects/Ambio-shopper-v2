import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>Amibo-Shopper</h1>
    <nav className="navbar">
      <span>
        <NavLink to="/products" activeClassName="selected">
          Product
        </NavLink>
        <NavLink to="/cart" activeClassName="selected">
          Cart
        </NavLink>
      </span>
      {isLoggedIn ? (
        <span>
          {/* The navbar will show these links after you log in */}
          <NavLink to="/home" activeClassName="selected">
            Home
          </NavLink>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </span>
      ) : (
        <span>
          {/* The navbar will show these links before you log in */}
          <NavLink to="/login" activeClassName="selected">
            Login
          </NavLink>
          <NavLink to="/signup" activeClassName="selected">
            Sign Up
          </NavLink>
        </span>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
