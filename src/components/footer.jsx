import '../style/footer.scss';
import Socials from './socials.jsx';

function Footer() {
  return (
    <div className='footer'>
      <img src='/marvel-logo.png' alt='marvel-logo' />
      <div className='footer-nav'>
        <div>
          <a href='https://marvelofficial.com/shop/?srsltid=AfmBOorVehT8ELdv9CSRuSbn2YBFn_1tngBPVsIlMT4j70lF8KhpRGsb'>
            Shops
          </a>
          <a href='https://www.disneyplus.com/brand/marvel?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-NA-EN-NavFooter-Marvel_DisneyPlus_NavFooter_Evergreen-NA'>
            Disney+
          </a>
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
  );
}

export default Footer;
