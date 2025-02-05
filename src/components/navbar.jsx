import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../style/navbar.scss';

function Navbar() {
  const [input, setInput] = useState('');

  return (
    <>
      <header>
        <nav className='navbar'>
          <ul>
            <li>
              <Link to='/' className='myLink'>
                <img src='\pictures\home.png' alt='' /> Home
              </Link>
            </li>

            <li className='input-wrapper'>
              <img src='\pictures\search.png' alt='' />
              <input type='text' placeholder='Search' value={input} onChange={(e) => setInput(e.target.value)} />
            </li>
            <li>
              <Link to='/favorites' className='myLink'>
                <img src='\pictures\heart.png' alt='' />
                Favorites
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
