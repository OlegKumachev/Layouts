import React from 'react';


const ShopCard = ({ name, price, color, img }) => (
  <div className='ShopCard'>
    <h2 className='ShopCard-name'>{name}</h2>
    <div className='ShopCard-color'>{color}</div>
    <img className='ShopCard-img'  src={img} alt={name} />
    <div className='ShopCard-container'>  
      <div className='ShopCard-price'> $ {price}</div>
      <button  className='ShopCard-button'> Add to Card </button>
    </div>

  </div>
);

export default ShopCard;