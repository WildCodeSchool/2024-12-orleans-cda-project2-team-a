import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import '../style/navbar.scss';

function Navbar() {
  const [input, setInput] = useState('');

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              {' '}
              <Link to='/' className='myLink'>
                <img src='/home.png' alt='' /> Home
              </Link>
            </li>

            <li className='input-wrapper'>
              <img src='/search.png' alt='' />
              <input type='text' placeholder='Search' value={input} onChange={(e) => setInput(e.target.value)} />
            </li>
            <li>
              <Link to='/favorites' className='myLink'>
                {' '}
                <img src='/heart.png' alt='' />
                Favorites
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      
        <Outlet />
      
    </>
  );
}

export default Navbar;
