import React from 'react';

const ShopItem = ({ name, price, color, img }) => (

  <div className='ShopItems'>
    <img className='ShopItems-img' src={img} alt={name} />
      <h2 className='ShopItems-name'> {name} </h2>
      <div>{color}</div>
      <p className='ShopItems-price'> $ {price}</p>
      <button className='ShopItems-button'> Add to Card</button>
      
  </div>
)

export default ShopItem