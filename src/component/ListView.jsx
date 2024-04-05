import React from 'react';
import ShopItem from './ShopItem';


const ListView = ({ items }) => (
    <div className='list_class'>
      {items && items.map((item, index) => (
        <ShopItem key={index} {...item} />
      ))}
    </div>
  );
  
export default ListView;
