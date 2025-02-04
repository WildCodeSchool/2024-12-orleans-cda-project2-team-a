import { useState } from 'react';

import '../style/navbar.scss';

function Navbar() {
  const [input, setInput] = useState('');

  return (
    <nav>
      <ul>
        <li>
          {' '}
          <img src='/pictures/home.png' alt='' /> Home
        </li>

        <li className='input-wrapper'>
          <img src='/pictures/search.png' alt='' />
          <input type='text' placeholder='Search' value={input} onChange={(e) => setInput(e.target.value)} />
        </li>
        <li>
          <img src='/pictures/heart.png' alt='' />
          Favorites
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
