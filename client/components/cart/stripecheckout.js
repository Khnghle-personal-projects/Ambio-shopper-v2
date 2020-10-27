import React, {useState} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

function Checkout() {
  const [product] = useState({
    name: 'Tesla Roadster',
    price: 6.67,
    description: 'Cool car'
  })

  async function handleToken(token) {
    const response = await axios.post('/api/stripe', {token, product})
    const status = response.data
    console.log('Response:', response.data)
    if (status === 'success') {
      console.log('Success! Check email for details', {type: 'success'})
    } else {
      console.log('Something went wrong', {type: 'error'})
    }
  }

  return (
    <div className="container">
      <StripeCheckout
        stripeKey="pk_test_51HfCAuA1dGJ3lqxNQb7WRQqo6OpHcvwBl4UBwyQqHhXD9E6WbIbFEe5fAn5Mlr5IlF3vMwmgvjksECp7NAb7qKWo00y3Rw1pUH"
        token={handleToken}
        amount={product.price * 100}
        name="Random Text"
        billingAddress
        shippingAddress
      />
    </div>
  )
}

export default Checkout
