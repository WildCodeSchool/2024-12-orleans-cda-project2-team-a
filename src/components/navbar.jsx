import { Link } from 'react-router-dom';

import '../style/burger.scss';
import '../style/navbar.scss';
import Burger from './burger';
import Search from './search';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='my-link'>
          <img className='logo' src='\pictures\marvel-logo.png' alt='marvel-logo' />
        </Link>

        <ul className='nav-links'>
          <li>
            <Link to='/' className='my-link'>
              <img src='\pictures\home.png' alt='' /> Home
            </Link>
          </li>

          <li className='input'>
            <img src='\pictures\search.png' alt='' />
            <Search />
          </li>
          <li>
            <Link to='/favorites' className='my-link'>
              <img src='\pictures\heart.png' alt='' />
              Favorites
            </Link>
          </li>
          <li>
            <Link to='/comics' className='my-link'>
              <img src='\pictures\comic-book.png' alt='' />
              Comics
            </Link>
          </li>
        </ul>
        <Burger />
      </nav>
    </>
  );
}

export default Navbar;
