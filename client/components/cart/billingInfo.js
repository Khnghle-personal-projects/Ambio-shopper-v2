import React from 'react'

function BillingInfo(props) {
  console.log('this is props ', props)
  return (
    <form>
      <h3>Billing Information</h3>
      <label> First Name </label>
      <input />
      <label> Last Name </label>
      <input />
      <label> Address </label>
      <input />
      <label> City </label>
      <input />
      <label> Zip Code </label>
      <input />
      <label> Phone Number </label>
      <input />
    </form>
  )
}

export default BillingInfo
