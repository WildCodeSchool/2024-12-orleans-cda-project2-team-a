import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../style/burger.scss';

const Burger = () => {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  return (
    <>
      <div className='container'>
        <div className='input'></div>
        <div className='burger' onClick={toggleBurger}>
          <div className={`line ${burger ? 'active' : ''}`}></div>
          <div className={`line ${burger ? 'active' : ''}`}></div>
          <div className={`line ${burger ? 'active' : ''}`}></div>
          {burger && (
            <ul className={burger ? 'active' : ''}>
              <li>
                <Link to='/' className='burger-link'>
                  Home
                </Link>
              </li>

              <li>
                <Link to='/favorites' className='burger-link'>
                  Favorites
                </Link>
              </li>
              <li>
                <Link to='/comics' className='burger-link'>
                  Comics
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Burger;
