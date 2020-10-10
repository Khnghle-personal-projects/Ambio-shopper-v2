import React from 'react'

const dummy = [
  {
    id: 1,
    name: 'Mario',
    pic:
      'https://images-na.ssl-images-amazon.com/images/I/61aYlctXc8L._SL1500_.jpg',
    price: '$13.99'
  },
  {
    id: 2,
    name: 'Link',
    pic:
      'https://images-na.ssl-images-amazon.com/images/I/61JXjf8ioTL._SL1500_.jpg',
    price: '$13.99'
  }
]

const DisplayInfo = () => {
  return (
    <div>
      {dummy.map(curr => (
        <div key={curr.id}>
          <div>{curr.name}</div>
          <img src={curr.pic} className="image-display" />
          <div>{curr.price}</div>
        </div>
      ))}
    </div>
  )
}

export default DisplayInfo
