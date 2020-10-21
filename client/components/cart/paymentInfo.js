import React, {useState} from 'react'

function PaymentInfo(props) {
  const [cardNo, setCardNo] = useState('')
  const [fName, setfName] = useState('')
  const [lName, setlName] = useState('')

  const [month, setMonth] = useState(0)
  const [code, setCode] = useState(0)

  console.log({cardNo, fName, lName, month, code})

  return (
    <form className="col-50">
      <h3>Payment Information</h3>

      <div className="row">
        <div className="col-50">
          <label> Cardholder's First Name </label>
          <input onChange={evt => setfName(evt.target.value)} />
        </div>

        <div className="col-50">
          <label> Cardholder's Last name </label>
          <input onChange={evt => setlName(evt.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-50">
          <label> Card Number </label>
          <input
            onChange={evt => {
              if (evt.target.value.length > 16)
                evt.target.value = evt.target.value.slice(0, 16)
              // if(evt.target.value.length === 4 || evt.target.value.length === 9 || evt.target.value.length === 14) evt.target.value += " "
              setCardNo(evt.target.value)
            }}
            type="text"
          />
        </div>
        <div className="col-50">
          <label> CVV </label>
          <input
            onChange={evt => {
              if (evt.target.value.length > 3)
                evt.target.value = evt.target.value.slice(0, 3)
              setCode(evt.target.value)
            }}
            type="number"
            className="small_input"
          />
        </div>
      </div>

      <div className="row" />

      <div className="row">
        <div className="col-100">
          <label> Expiration Date </label>
          <input onChange={evt => setMonth(evt.target.value)} type="month" />
        </div>
      </div>
    </form>
  )
}

export default PaymentInfo
