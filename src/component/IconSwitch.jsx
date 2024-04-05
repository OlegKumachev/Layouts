import React from 'react';

const IconSwitch = ({ icon, onSwitch }) => (
 
    <div className='IconSwitch-button'  onClick={onSwitch} >
    <span className="material-icons">{icon}</span>
    </div>

);

export default IconSwitch;