import React from 'react'

function AddToCartForm(props) {
  return (
    <form className="qty-form">
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
  )
}

export default AddToCartForm
