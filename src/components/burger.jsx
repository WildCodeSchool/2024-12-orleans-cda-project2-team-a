import { useState } from 'react';

import '../style/burger.scss';

const Burger = () => {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  return (
    <>
      <div className='contenair'>
        <div className='input'></div>
        <div className='burger' onClick={toggleBurger}>
          <div className={`line ${burger ? 'active' : ''}`}></div>
          <div className={`line ${burger ? 'active' : ''}`}></div>
          <div className={`line ${burger ? 'active' : ''}`}></div>
          {burger && (
            <ul className={burger ? 'active' : ''}>
              <li>Favorite</li>
              <li>comics</li>
              <li>Characters</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Burger;
