import React from 'react'

function BillingInfo(props) {
  return (
    <form className="col-50">
      <h3>Billing Information</h3>

      <label> Full Name </label>
      <input />
      <label> Address </label>
      <input />
      <label> City </label>
      <input />

      <div className="row">
        <div className="col-50">
          <label> State </label>
          <input className="small_input" />
        </div>

        <div className="col-50">
          <label> Zip Code </label>
          <input className="small_input" />
        </div>
      </div>

      <label> Phone Number </label>
      <input />
      <label> Email </label>
      <input />
    </form>
  )
}

export default BillingInfo
