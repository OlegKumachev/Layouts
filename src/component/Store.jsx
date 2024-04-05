import React, { useState } from 'react';
import CardsView from './CardsView';
import ListView from './ListView';
import products from './products'
import  IconSwitch  from './IconSwitch';

const Store = () => {
  const [selectLayout, setSelectLayout] = useState(products);
  const [items, setItems] = useState(products);
  const listIcon = 'view_list';
  const cardsIcon = 'view_module'
  const handleLayout = (layout) => {
    setSelectLayout(layout);
  };

  return (
    <div className='Store'>
      <div className='IconSwitch'>
        <IconSwitch  icon={selectLayout === 'list' ? cardsIcon : listIcon} onSwitch={() =>
           handleLayout(selectLayout === 'list' ? 'cards' : 'list')} />
      </div>
      {selectLayout === 'cards' ? (
        <CardsView items={items} />
      ) : (
        <ListView items={items} />
      )}
    </div>
  );
};

export default Store;
