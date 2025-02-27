import { Link } from 'react-router-dom';

import '../style/footer.scss';
import Socials from './socials';

function Footer() {
  return (
    <>
      <footer>
        <div className='footer'>
          <Link to='/'>
            <img src='/pictures/marvel-logo.png' alt='marvel-logo' />
          </Link>

          <div className='footer-nav'>
            <div>
              <a href='https://marvelofficial.com/shop/'>Shops</a>
              <a href='https://www.disneyplus.com/brand/'>Disney+</a>
            </div>

            <div>
              <a href='https://marvelstory.fr/'>Blog</a>
              <a href='https://www.marvelhq.com/'>Marvel.com</a>
            </div>
            <div>
              <a href='https://www.marvel.com/corporate/advertising'>Advertising</a>
              <a href='https://help.marvel.com/'>Help/Faq</a>
            </div>
          </div>
          <Socials />
        </div>
      </footer>
    </>
  );
}

export default Footer;
