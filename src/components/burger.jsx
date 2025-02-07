import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../style/burger.scss';

const Burger = () => {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger); // Utilisation de "burger" et non "Burger"
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
              <li>
                {' '}
                <Link to='/' className='myLink'>
                  Home
                </Link>
              </li>

              <li>
                <Link to='/favorites' className='myLink'>
                  Favorites
                </Link>
              </li>

              <li>Comics</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Burger;
