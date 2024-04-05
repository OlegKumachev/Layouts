import React from 'react';
import ShopCard from './ShopCard';

const CardsView = ({ items }) => (
  
  <div className='cards_Class'>
  {items && items.map((item, index) => (
    <ShopCard key={index} {...item} />
  ))}
  </div>
);

export default CardsView