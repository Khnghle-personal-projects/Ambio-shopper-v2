import React from 'react'

function SearchBarForm(props) {
  return (
    <form className="search-bar" onSubmit={props.submitSearch}>
      <input name="searchString" onChange={props.change} />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBarForm
